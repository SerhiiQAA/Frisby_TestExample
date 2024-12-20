const frisby = require('frisby');

describe('API Tests with Frisby', () => {
  it('GET /posts/1 should return status 200 and correct data', async () => {
    await frisby.get('/posts/1')
      .expect('status', 200)
      .expect('json', 'id', 1);
  });
});

