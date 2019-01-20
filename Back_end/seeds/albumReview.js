const faker = require('faker')

const createFakeAlbumReview = () => ({
  dateCreated: faker.random.number(),
  dateModified: faker.random.number(),
  rating: faker.random.number(),
  review: faker.lorem.sentence(),
  spotifyAlbumID: faker.random.uuid(),
  userID: faker.random.number(),
})

exports.seed = async function(knex, Promise) {
  const fakeAlbumReview = []
  const desiredFakeAlbumReview = 50
  for (let i = 0; i < desiredFakeAlbumReview; i++) {
    fakeAlbumReview.push(createFakeAlbumReview())
  }
  await knex('albumReview').insert(fakeAlbumReview)
}
