/*
  Написать функцию getUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    https://docs.github.com/en/rest/reference/users#get-a-user
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch - `User ${name} not found`
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.

  * defunkt, atmos, octocat
*/

const container = document.querySelector("#task-3");
const form = container.querySelector(".search-form");
const result = container.querySelector(".result");
const errorRef = container.querySelector(".error");

const API_URL = "https://api.github.com";
// /users/USERNAME

const markup = `
  <table>
    <tbody>
      <tr>
        <th>Avatar: &emsp;</th>
        <td>
          <img src="" alt="User avatar" width="100">
        </td>
      </tr>
      <tr>
        <th>User name: &emsp;</th>
        <td>John Doe</td>
      </tr>
      <tr>
        <th>Bio: &emsp;</th>
        <td>User bio</td>
      </tr>
      <tr>
        <th>Public repos: &emsp;</th>
        <td>55</td>
      </tr>
    </tbody>
  </table>`;
