Работа с вебпаком
Сначала нужно склонировать себе на комп репозиторий webpack-starter-kit со сборкой, он должен просто храниться у вас на компе для этой и дальнейших домашек. 
Чтобы ним воспользоваться нужно создать свой пустой репозиторий на Гитхабе, склонировать его себе на компьютер:
  git clone ссылка_на_репозиторий
Потом нужно перенести в него все файлы и папки из репозитория с пакетом webpack, который вы до этого склонировали в том виде, как на репозитории по ссылке: webpack-starter-kit.
После этого нужно установить зависимости:
 npm install 
заменить адрес в поле "homepage" в файле package.json на свой 
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
и работать:
npm start
После того как все готово, сохраняем изменения:
  git add .
  git commit -m "что изменили"
Потом push:
  git push
 и деплой:
npm run deploy
В настройках своего нового репозитория на Гитхабе в разделе GitHub Pages ничего устанавливать не нужно, команда npm run deploy все сделает за вас.
То есть вы клонируете себе репозиторий с настройками webpack только для того, чтобы потом все эти файлы копировать в свои будущие проекты. А работаете только в своем созданном на Гитхабе и склонированном репозитории.
И не делайте npx rimraf .git в своем репозитории, так вы теряете связь с удаленным...
https://github.com/luxplanjay/webpack-starter-kit

=================================================================================================================================================================================

Работа с парселом
Сначала нужно склонировать себе на комп репозиторий https://github.com/goitacademy/parcel-project-template со сборкой, он должен просто храниться у вас на компе для этой и дальнейших домашек.
Чтобы ним воспользоваться нужно создать на Гитхабе свой репозиторий, инициализировать его файлом readme.md и убедиться, что основная ветка называется main, а не master, склонировать его себе на компьютер:
  git clone ссылка_на_репозиторий
Потом нужно перенести в него все файлы и папки (кроме папки .git) из репозитория с пакетом parcel, который вы до этого склонировали.
После этого следуем инструкции к сборке: https://github.com/goitacademy/parcel-project-template.
После того как все готово, сохраняем изменения:
  git add .
  git commit -m "что изменили"
Потом push:
  git push 
Для отображения рабочей странички нужно в настройках своего нового репозитория на Гитхабе в разделе Pages выбрать gh-pages для Sourse и сохранить выбор. 
То есть вы клонируете себе репозиторий с настройками parcel только для того, чтобы потом все эти файлы копировать в свои будущие проекты. А работаете только в своем созданном на Гитхабе и склонированном репозитории. 
https://github.com/goitacademy/parcel-project-template
