exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albumReview').del().then(function() {
    // Inserts seed entries
    return knex('albumReview').insert([
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyAlbumID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyAlbumID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyAlbumID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyAlbumID: '382ObEPsp2rxGrnsizN5TX',
      },
    ])
  })
}
