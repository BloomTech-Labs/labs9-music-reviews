exports.seed = function(knex, Promise) {
  return knex('trackReview')
    .del() // delete existing posts
    .then(function() {
      return knex('trackReview').insert([
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyTrackID:'3BtIUTUYKdzrgTj7gjcV0W',
          rating:5,
          review: 'Love this track',
          userID: 2,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyTrackID:'3Z4bh5CiioI13pSKWRbUOE',
          rating:1,
          review: 'Not a huge fun',
          userID: 1,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyTrackID:'67yQufHG4yE25UefI8E7AU',
          rating:3,
          review: 'Nice',
          userID: 3
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyTrackID:'5RMmI12HWgdBYtJHE1wEgY',
          rating:4,
          review: 'Who knew cello and pop would go so well together',
          userID: 1
        }
        
        
      ]);
    });
};