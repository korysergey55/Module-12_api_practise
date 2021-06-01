/* Урок чтения :)
  Реализовать загрузку юзеров ГитХаба по 10 человек 
  с кнопкой Load More.
  
  Формат полного url таков:
    https://api.github.com/users
    
  Документация по Git API:
    https://docs.github.com/en/rest/reference/users#list-users
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch.
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    id: id
    login: логин
    GitHub Page: ссылка на страничку
  
  Все необходимые данные есть в ответе от API.

  В отдельном файле класс апи-сервиса:
  1) в конструкторе задать адрес апи, сколько элементов на странице и начальную страницу (тут - id юзера)
  2) метод, который фетчит данные:
     - составляет полную строку запроса с параметрами
     - делает запрос, проверяет ответ
     - уыеличивает страницу (тут - определяет последнего id юзера)
  3) метод, который сбрасывает страницу (тут - id юзера)

  В основном файле:
  1) импортим все сервисы и создаем экземпляры
  2) выбираем рефы из дома (кнопка, результат, ошибка)
  3) вешаем слушателей событий на кнопки get и load more

  При первой загрузке
  1) показываем кнопку Load More
  2) обнуляем счетчик страниц (тут - id юзера)
  3) очищаем контейнер с предыдущими результатами
  4) делаем запрос на АПИ

  Запрос на АПИ:
  1) дизейблим кнопку Load More
  2) вызываем функцию с фетчем:
     а) при успешном фетче в then
        - рендерим данные (очищаем реф с ошибкой)
        - инейблим кнопку Load More
     б) при ошибке в catch
        - очищаем контейнер с предыдущими результатами
        - рендерим ошибку
        - скрываем кнопку Load More

*/

import ApiServise from "./services/api-service.js";
import createMarkup from "./services/createMarkup.js";
import LoadMoreBtn from "./components/load-more-btn.js";

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const perPage = 10;

const apiServise = new ApiServise({ perPage });

const refs = {
  error: document.querySelector(".error"),
  result: document.querySelector(".result"),
  getBtn: document.querySelector('[data-action="get-users"]'),
};

refs.getBtn.addEventListener("click", getFirstUsers);
loadMoreBtn.refs.button.addEventListener("click", getUsers);

function getFirstUsers() {
  loadMoreBtn.show();
  apiServise.resetUserId();
  refs.result.innerHTML = "";

  getUsers();
}

function getUsers() {
  loadMoreBtn.disable();
  apiServise
    .fetchItems()
    .then((items) => {
      renderItems(items);
      loadMoreBtn.enable();
    })
    .catch((err) => {
      renderError(err);
      loadMoreBtn.hide();
    });
}

function renderItems(items) {
  const markup = createMarkup(items);
  refs.result.insertAdjacentHTML("beforeend", markup);
  refs.error.textContent = "";
}

function renderError(err) {
  refs.result.innerHTML = "";
  refs.error.textContent = err;
}
