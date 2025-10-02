// app.test.js  (at repo root)
const request = require("supertest");
let server;

beforeAll(() => {
  server = require("./src/index.js"); // <-- correct path from repo root
});

afterAll(done => {
  if (server && server.close) server.close(done);
  else done();
});

test("health endpoint returns ok", async () => {
  const res = await request("http://localhost:3000").get("/health");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ status: "ok" });
});
