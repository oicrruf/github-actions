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

it('test /user/id if id is a number', (done) => {
  request(app)
    .get('/user/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toEqual(
        expect.objectContaining({
          user_id: expect.any(Number)
        }),
      );
      done();
    })
})