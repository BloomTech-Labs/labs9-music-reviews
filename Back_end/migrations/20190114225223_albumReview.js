exports.up = function(knex, Promise) {
  return knex.schema.createTable('albumReview', function(tbl) {
    tbl.increments('albumId').primary()
    tbl.datetime('dateCreated')
    tbl.datetime('dateModified')
    tbl.integer('rating')
    tbl.string('albumName')
    tbl.text('reviewText')
    tbl.integer('userId').unique()
    tbl.foreign('userId').references('userId').inTable('user')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albumReview')
}
