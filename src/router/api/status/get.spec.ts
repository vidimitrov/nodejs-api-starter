const request = require('supertest');
const server = require('../../../../server');

const url = '/';

describe(`GET ${url}`, () => {
  it('should return 200 OK', function () {
    return request(server)
      .get(url)
      .expect(200);
  });
});
