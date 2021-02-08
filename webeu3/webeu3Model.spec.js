const db = require('../data/dbConfig');
const Members = require('./webeu3Model');

beforeEach(() => {
  return db('members').truncate()
})

describe('WebEU3 model', () => {
  describe('insert function', () => {

    let members

    test('should insert a member', () => {
      Members.add({ "name": "unity" })

      members = db('members')
      expect(201)
      expect(members).toHaveLength(2)
    })

    test('should insert another member', () => {
      Members.add({ "name": "ants in my johnson" })
      expect(201)
    })
  })
})

