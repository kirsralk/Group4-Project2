const request = require('supertest');
const app = require('./jest');

test('Should signup for a user', async () => {
  await request(app).post('/users')
  .send({
    name: 'test',
    email: 'test@tet.com',
    password: 'test123'
  })
  .expect(307)
})