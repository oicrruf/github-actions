const request = require('supertest');
const app = require('../src');

const response = {
  serverStatus: 'ok',
  version: 'v1.0.0'
}

it('test /health route', (done) => {
  request(app)
    .get('/health')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, response, done)
})