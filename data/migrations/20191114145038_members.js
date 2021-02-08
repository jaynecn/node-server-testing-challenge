exports.up = function(knex) {
  return knex.schema.createTable('members', table => {
    table.increments();
    table.string('name', 128).notNullable();
  });
};

exports.down = function(knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists('members');
};
