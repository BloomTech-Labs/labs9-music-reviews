exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', function (usr) {
      usr.increments('userID').primary()
      usr.string('emailAddress', 100)
      usr.boolean('paidMembership').defaultTo('false')
      usr.integer('reviewCount')
      usr.datetime('subscriptionExpiration')
      usr.string('nickname').unique()
    })
    .createTable('albumReview', function (alb) {
      alb.increments('albumReviewID').primary()
      alb.datetime('dateCreated')
      alb.datetime('dateModified')
      alb.integer('rating')
      alb.text('review')
      alb.string('spotifyAlbumID')
      alb.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
    .createTable('trackReview', function (trk) {
      trk.increments('trackReviewID').primary()
      trk.datetime('dateCreated')
      trk.datetime('dateModified')
      trk.integer('rating')
      trk.text('review')
      trk.string('spotifyTrackID')
      trk.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('albumReview')
    .dropTable('trackReview')
    .dropTable('users')
}
