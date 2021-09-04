
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('users', table => {
      table.increments();

      table.string('username', 225)
        .notNullable()
        .unique();
    
      table.string('password', 255).notNullable();
      })
      .createTable('tasks', table => {
        table.increments();

        table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        table.string('description', 255).notNullable();

        table.string('notes', 255);
        
        table.boolean('completed')
          .notNullable()
          .defaultTo(false);
        
      })
      .createTable('guest_tasks', table => {
        table.increments();

        table.string('description', 255).notNullable();

        table.string('notes', 255);
        
        table.boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
  );
};

exports.down = function(knex, Promise) {
  return (
    knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('tasks')
    )
};