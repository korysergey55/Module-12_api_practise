export default (items) =>
  items
    .map(
      ({ id, avatar_url, login, html_url }) => `
<tr>
 <table>
  <tr class="table-info">
    <th>Avatar: &emsp;</th>
    <td>
      <img src=${avatar_url} alt="User avatar" width="100">
    </td>
  </tr>
  <tr>
    <th>User id: &emsp;</th>
    <td>${id}</td>
  </tr>
  <tr>
    <th>Login: &emsp;</th>
    <td>${login}</td>
  </tr>
  <tr>
    <th>GitHub Page: &emsp;</th>
    <td><a href=${html_url}>${html_url}</a></td>
  </tr>
 </table>
</tr>`
    )
    .join("");
