exports.seed = function (knex, Promise) {
  return knex('albumReview')
    .del() // delete existing posts
    .then(function () {
      return knex('albumReview').insert([
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyAlbumID: '64oiZ51GV3YCpCzEafi1sp',
          rating: '5',
          review: 'Love this album',
          userID: 1,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyAlbumID: '4QJIFDBNjpQ8ozKMym1nBT',
          rating: '5',
          review: 'What a great album',
          userID:2,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyAlbumID: '12OKJDXvGwSpi3uJ9aoBcn',
          rating: '1',
          review: 'Not a huge fun',
          userID:1,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyAlbumID: '3Vl2cOKeyv8sn2NPsN5RK2',
          rating: '3',
          review: '@Das This one is for you.',
          userID: 3,
        },
        {
          dateCreated:'02/08/2019',
          dateModified:'02/08/2019',
          spotifyAlbumID: '64oiZ51GV3YCpCzEafi1sp',
          rating: '3',
          review: 'This album is a great album with distinct beat',
          userID:2
        },
        {
          spotifyAlbumID: '35s58BRTGAEWztPo9WqCIs',
          rating: '4',
          review: 'Spidey!',
          userID: 3, 
        }
      ])
    })
 };
