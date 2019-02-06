exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('users', function (usr) {
        usr.increments('userID').primary()
        usr.string('firebaseUID')
        usr.string('emailAddress', 100)
        usr.boolean('paidMembership').defaultTo('false')
        usr.string('subscriptionExpiration')
        usr.string('nickname')
      })
      .createTable('albumReview', function (alb) {
        alb.increments('albumReviewID').primary()
        alb.string('dateCreated')
        alb.string('dateModified')
        alb.integer('rating')
        alb.text('review').notNullable()
        alb.string('spotifyAlbumID')
        alb.integer('userID').unsigned().references('userID').inTable('users').onDelete('cascade').index()
      })
      .createTable('trackReview', function (trk) {
        trk.increments('trackReviewID').primary()
        trk.string('dateCreated')
        trk.string('dateModified')
        trk.integer('rating')
        trk.text('review').notNullable()
        trk.string('spotifyTrackID')
        trk.integer('userID').unsigned().references('userID').inTable('users').onDelete('cascade').index()
      })
      .createTable('likedAlbumReview', function (lar) {
        lar.increments('likedAlbumReviewID').primary()
        lar.boolean('like')
        lar.boolean('dislike')
        lar.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
        lar.integer('albumReviewID').unsigned().references('albumReviewID').inTable('albumReview').onDelete('cascade').index()
      })
      .createTable('likedTrackReview', function (ltr) {
        ltr.increments('likedTrackReviewID').primary()
        ltr.boolean('like')
        ltr.boolean('dislike')
        ltr.integer('userID').unsigned().notNullable().references('userID').inTable('users').onDelete('cascade').index()
        ltr.integer('trackReviewID').unsigned().references('trackReviewID').inTable('trackReview').onDelete('cascade').index()
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