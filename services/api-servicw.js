export default class ApiService {
    constructor({ perPage, userId = 100 }) {
      this.requestUrl = "https://api.github.com/users";
      this.perPage = perPage;
      this.userId = userId;
    }
  
    fetchItems() {
      const url = `${this.requestUrl}?since=${this.userId}&per_page=${this.perPage}`;
  
      return fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject("Something went wrong");
          // throw new Error("Something went wrong");
        })
        .then((users) => {
          this.userId = users[users.length - 1].id;
          return users;
        });
    }
  
    resetUserId() {
      this.userId = 0;
    }
  }
  