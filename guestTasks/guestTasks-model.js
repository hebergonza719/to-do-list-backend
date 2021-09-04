const db = require('../database/dbConfig');

function find() {
  return db('guest_tasks').select('id', 'description', 'notes', 'completed');
}

function findById(id) {
  return db('guest_tasks').where({ id });
}

async function add(task) {
  return await db('guest_tasks').insert(task);
}

function remove(id) {
  return db('guest_tasks')
    .where({ id })
    .del();
}

function update(changes, id) {
  return db('guest_tasks')
    .where({ id })
    .update(changes);
}

module.exports = {
  find,
  findById,
  add,
  remove,
  update
}