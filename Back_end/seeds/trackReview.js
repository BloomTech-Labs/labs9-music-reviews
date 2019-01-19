exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trackReview').del().then(function() {
    // Inserts seed entries
    return knex('trackReview').insert([
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyTrackID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyTrackID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyTrackID: '382ObEPsp2rxGrnsizN5TX',
      },
      {
        dateCreated: '1/18/2019',
        dateModified: '1/18/2019',
        rating: 3,
        review: 'class MaxStack{constructor(){this.stack = new Stack()',
        spotifyTrackID: '382ObEPsp2rxGrnsizN5TX',
      },
    ])
  })
}
