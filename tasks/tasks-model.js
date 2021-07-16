const db = require('../database/dbConfig');

function find() {
  return db('tasks').select('id', 'user_id', 'description', 'notes', 'completed');
}

function findByUserId(user_id) {
  return db('tasks').where({ user_id });
}

function findById(id) {
  return db('tasks').where({ id });
}

async function add(task) {
  return await db('tasks').insert(task);
  // return findById(id);
}

function remove(id) {
  return db('tasks')
    .where({ id })
    .del();
}

function update(changes, id) {
  return db('tasks')
    .where({ id })
    .update(changes);
}

module.exports = {
  find,
  findByUserId,
  findById,
  add,
  remove,
  update
};