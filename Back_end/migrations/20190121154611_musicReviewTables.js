exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', function (usr) {
      usr.increments('userID').primary()
      usr.string('emailAddress', 100)
      usr.boolean('paidMembership').defaultTo('false')
      usr.integer('reviewCount').defaultTo(0)
      usr.datetime('subscriptionExpiration')
      usr.string('nickname').unique()
    })
    .createTable('albumReview', function (alb) {
      alb.increments('albumReviewID').primary()
      alb.timestamps(true, true)
      alb.integer('rating')
      alb.text('review')
      alb.string('spotifyAlbumID')
      alb.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
    .createTable('trackReview', function (trk) {
      trk.increments('trackReviewID').primary()
      trk.timestamps(true, true)
      trk.datetime('dateCreated')
      trk.datetime('dateModified')
      trk.integer('rating')
      trk.text('review')
      trk.string('spotifyTrackID')
      trk.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
    .createTable('likedAlbumReview', function (lar) {
      lar.increments('likedAlbumReviewID').primary()
      lar.boolean('like').defaultTo(0)
      lar.boolean('dislike').defaultTo(0)
      lar.integer('userID').unsigned().notNullable().unique().references('userID').inTable('users').onDelete('cascade').index()
      lar.integer('albumReviewID').unsigned().notNullable().unique().references('albumReviewID').inTable('albumReview').onDelete('').index()
    })
    .createTable('likedTrackReview', function (ltr) {
      ltr.increments('likedTrackReviewID').primary()
      ltr.boolean('like').defaultTo(0)
      ltr.boolean('dislike').defaultTo(0)
      ltr.integer('userID').unsigned().unique().notNullable().references('userID').inTable('users').onDelete('cascade').index()
      ltr.integer('trackReviewID').unsigned().unique().notNullable().references('trackReviewID').inTable('trackReview').onDelete('cascade').index()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('albumReview')
    .dropTable('trackReview')
    .dropTable('users')
    .dropTable('likedAlbumReview')
    .dropTable('likedTrackReview')
}
