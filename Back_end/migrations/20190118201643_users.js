exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments('userId').primary()
    tbl.string('emailAddress', 100)
    tbl.boolean('paidMembership').defaultTo('false')
    tbl.integer('reviewCount')
    tbl.datetime('subscriptionExpiration')
    tbl.string('nickName')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
