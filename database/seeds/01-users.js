
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {id: 1, username: 'heber gonzalez', password: 'sample'},
    {id: 2, username: 'andrea', password: '1234'},
    {id: 3, username: 'isabell', password: '4321'},
    {id: 4, username: 'jane', password: '5678'},
  ]);
};