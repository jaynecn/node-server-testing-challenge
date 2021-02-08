const db = require('../data/dbConfig.js');

module.exports = {
  add,
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(data) {
  const [id] = await db('members').insert(data, 'id');
  return db('members').where({ id }).first();
}

async function update(id, changes) {
  return null;
}

function add(data) {
  return db('members').insert(data);
}

function remove(id) {
  return db('members as m')
    .where({ 'm.id': id })
    .del()
}

function getAll() {
  return db('members');
}

function findById(id) {
  return null;
}
