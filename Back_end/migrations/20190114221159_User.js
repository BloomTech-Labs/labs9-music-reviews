exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(tbl) {
    tbl.increment('userId').primary()
    tbl.string('userName', 100)
    tbl.string(emailAddress, 100)
    tbl.boolean('paidMembership').defaultTo('false')
    tbl.integer('reviewCount')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
}
