exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments('id');
    tbl.string('username').notNullable().unique();
    tbl.string('email').notNullable();
    tbl.boolean('paid_status').notNullable();
    tbl.integer('reviewCount').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
