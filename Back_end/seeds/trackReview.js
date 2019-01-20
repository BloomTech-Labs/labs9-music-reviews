const faker = require('faker')

const createFakeTrackReview = () => ({
  dateCreated: faker.random.number(),
  dateModified: faker.random.number(),
  rating: faker.random.number(),
  review: faker.lorem.sentence(),
  spotifyTrackID: faker.random.uuid(),
  userID: faker.random.number(),
})

exports.seed = async function(knex, Promise) {
  const fakeTrackReview = []
  const desiredFakeTrackReview = 50
  for (let i = 0; i < desiredFakeTrackReview; i++) {
    fakeTrackReview.push(createFakeTrackReview())
  }
  await knex('trackReview').insert(fakeTrackReview)
}
