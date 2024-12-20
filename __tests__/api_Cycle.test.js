const frisby = require('frisby');

require('../setupFrisby');

describe('Frisby API Tests', () => {

  it('GET /posts/1 should return status 200 and correct data', async () => {
    await frisby.get('/posts/1')
      .expect('status', 200)
      .expect('json', 'id', 1);
  });

  it('POST /posts should create a new post and return status 201', async () => {
    await frisby.post('/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .inspectBody()
      .expect('status', 201)
      .expect('json', 'title', 'foo');
  });

  it('PUT /posts/1 should update a post and return status 200', async () => {
    await frisby.put('/posts/1', {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1
    })
      .inspectBody()
      .expect('status', 200)
      .expect('json', 'title', 'updated title');
  });

  it('DELETE /posts/1 should delete a post and return status 200', async () => {
    await frisby.del('/posts/1')
      .inspectBody()
      .expect('status', 200);
  });

});
