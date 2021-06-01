import config from "./config.json";
import menuTpl from "./tpl/menu.handlebars";
import paginationTpl from "./tpl/pagination.handlebars";

const getData = (path = '/') => {
    return fetch(config.url + path)
        .then(res => res.json())
        .catch(err => console.error(err));
}

getData()
    .then(data => {
        const arrMenu = Object.entries(data).map(item => ({
            name: item[0],
            link: item[1].slice(config.url.length),
            tpl: item[0].slice(0, -1),
        }));
        document.querySelector('#header').innerHTML = menuTpl(arrMenu);
    });


const genPagination = (info, tpl) => {
    // const next = false, prev = false;
    // if (data.info.next)
    //     next = info.next.slice(config.url.length);

    // if (data.info.prev)
    //     prev = info.prev.slice(config.url.length);

    return paginationTpl({
        next: info.next ? info.next.slice(config.url.length) : false,
        //next,
        prev: info.prev ? info.prev.slice(config.url.length) : false,
        //prev,
        tpl: tpl
    });
};

const genData = {
    character: (data) => {
        return {
            character: data.results,
            pagination: genPagination(data.info, 'character')
        };
    },

    location: (data) => {
        return {
            location: data.results,
            pagination: genPagination(data.info, 'location')
        };
    },

    episode: (data) => {
        return {
            episode: data.results,
            pagination: genPagination(data.info, 'episode')
        };
    }
};

document.addEventListener('click', e => {
    if (e.target.tagName !== 'A') return false;
    e.preventDefault();

    const activeNode = e.target.parentNode.parentNode.querySelector('a.active');
    if (activeNode)
        activeNode.classList.remove('active');

    e.target.classList.add('active');
    const url = e.target.getAttribute('href');
    const tpl = require('./tpl/' + e.target.dataset.tpl + '.handlebars');

    getData(url).then(data => {
        document.querySelector('#content').innerHTML = tpl(genData[e.target.dataset.tpl](data));
    });
});

//genData[e.target.dataset.tpl](data)
//genData.character(data);
//genData.location(data);
//genData.episode(data);