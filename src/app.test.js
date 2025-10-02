const request = require('supertest');
let server;

beforeAll(() => {
  server = require('./src/index.js'); // note: './src/index.js' from repo root
});

afterAll((done) => {
  server.close(done);
});

test('health endpoint returns ok', async () => {
  const res = await request(server).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('price endpoint returns cheapest vendor', async () => {
  const res = await request(server).get('/price');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('cheapest');
});
