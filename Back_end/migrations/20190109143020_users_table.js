exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.string('userId').primary().unique();
    tbl.string('userName', 100).unique();
    tbl.string('emailAddress', 100);
    tbl.boolean('paidMembership').defaultTo('false');
    tbl.integer('reviewCount');
    tbl.datetime('subscriptionExpiration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
