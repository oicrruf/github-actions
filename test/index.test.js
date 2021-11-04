const request = require('supertest');
const app = require('../src');

const { version } = require('../package.json');

const response = {
  serverStatus: 'ok',
  version: version
}

it('test /health route', (done) => {
  request(app)
    .get('/health')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, response, done)
})