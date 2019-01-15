exports.up = function(knex, Promise) {
  return knex.schema.createTable('trackReview', function(tbl) {
    tbl.increments('reviewId').primary()
    tbl.datetime('dateCreated')
    tbl.datetime('dateModified')
    tbl.integer('rating')
    tbl.string('trackName')
    tbl.text('reviewText')
    tbl.integer('userId').unique()
    tbl.foreign('userId').references('userId').inTable('user')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trackReview')
}
