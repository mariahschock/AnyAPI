const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /princesses should return a list of princesses', async () => {
    const res = await request(app).get('/princesses');
    expect(res.body.length).toEqual(14);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('Get /princesses/:id should return princess details', async () => {
    const res = await request(app).get('/princesses/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Snow White',
      age: 14,
      movie: 'Snow White and the Seven Dwarfs',
      year: 1937,
    });
  });
  
  afterAll(() => {
    pool.end();
  });
});
