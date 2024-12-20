const frisby = require('frisby');

frisby.globalSetup({
  request: {
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }
});
