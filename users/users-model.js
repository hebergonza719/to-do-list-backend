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
  return await db('users').insert(user);
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