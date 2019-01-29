exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', function (usr) {
      usr.increments('userID').primary()
      usr.string('firebaseUID')
      usr.string('emailAddress', 100)
      usr.boolean('paidMembership').defaultTo('false')
      usr.timestamp('subscriptionExpiration').notNullable().defaultTo(knex.fn.now())
      usr.string('nickname').unique()
    })
    .createTable('albumReview', function (alb) {
      alb.increments('albumReviewID').primary()
      alb.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
      alb.timestamp('modified_at').notNullable().defaultTo(knex.fn.now())
      alb.integer('rating')
      alb.text('review').notNullable()
      alb.string('spotifyAlbumID')
      alb.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
    .createTable('trackReview', function (trk) {
      trk.increments('trackReviewID').primary()
      trk.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
      trk.timestamp('modified_at').notNullable().defaultTo(knex.fn.now())
      trk.integer('rating')
      trk.text('review').notNullable()
      trk.string('spotifyTrackID')
      trk.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
    })
    .createTable('likedAlbumReview', function (lar) {
      lar.increments('likedAlbumReviewID').primary()
      lar.boolean('like')
      lar.boolean('dislike')
      lar.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
      lar.integer('albumReviewID').unsigned().notNullable().references('albumReviewID').inTable('albumReview').onDelete('cascade').index()
    })
    .createTable('likedTrackReview', function (ltr) {
      ltr.increments('likedTrackReviewID')
      ltr.boolean('like')
      ltr.boolean('dislike')
      ltr.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
      ltr.integer('trackReviewID').unsigned().notNullable().references('trackReviewID').inTable('trackReview').onDelete('cascade').index()
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