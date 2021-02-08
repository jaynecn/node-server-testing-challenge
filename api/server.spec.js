const server = require('./server');
const request = require('supertest');

describe('server', () => {
  describe('[GET] / endpoint', () => {

    test('the db env is testing', () => {
      expect(process.env.DB_ENV).toBe('testing')
    })

    test(' GET should return 200', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
    })

    test('test server ', () => {
      return request(server)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test(' GET users returning 200', () => {
     request('http://localhost:6000/members')
        .get('/members')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect('Content-Length', '82')
    })
  })

  describe('[POST] / endpoint', () => {
    let data = {"name": "summer"}

    let badData = {"username": "jerry"}

    test(' POST new member 201 ', () => {

     request('http://localhost:6000/members')
        .post('/members')
        .send(data)
        .set('Accept', 'application/json')
        .expect(201)
        .expect('Content-Type', /json/)
    })

    test(' POST bad data 500 ', () => {

      request('http://localhost:6000/members')
         .post('/members')
         .send(badData)
         .set('Accept', 'application/json')
         .expect(500)
         .expect('Content-Type', /json/)
     })

  })
})
