exports.up = function(knex, Promise) {
  return knex.schema.createTable('albumReview', function(tbl) {
    tbl.string('albumId').primary()
    tbl.datetime('dateCreated')
    tbl.datetime('dateModified')
    tbl.integer('rating')
    tbl.string('albumName')
    tbl.text('reviewText')
    tbl.string('userId').unique()
    tbl.foreign('userId').references('userId').inTable('users')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albumReview')
}
