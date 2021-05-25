const db = require('../database/dbConfig');

function find() {
  return db('users').select('id', 'username', 'password');
}

function findNoPass() {
  return db('users').select('id', 'username');
}

function findBy(username) {
  return db('users').where({ username });
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

module.exports = {
  find,
  findNoPass,
  findBy,
  add,
  findById
};