const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const API = {
  URL: "https://jsonplaceholder.typicode.com/",
};

const ENDPOINT = {
  base: API.URL,
  context: '/posts'
};

module.exports = {
  ENDPOINT, HTTP_METHODS
};