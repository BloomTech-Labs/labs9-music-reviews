const faker = require('faker')
const createFakeUser = () => ({
  emailAddress: faker.internet.email(),
  paidMembership: faker.random.boolean(),
  reviewCount: faker.random.number(),
  subscriptionExpiration: faker.random.number(),
  nickName: faker.random.word().unique(),
})
const createFakeAlbumReview = () => ({
  dateCreated: faker.random.number(),
  dateModified: faker.random.number(),
  rating: faker.random.number(),
  review: faker.lorem.sentence(),
  spotifyTrackID: faker.random.uuid(),
})
const createFakeTrackReview = () => ({
  dateCreated: faker.random.number(),
  dateModified: faker.random.number(),
  rating: faker.random.number(),
  review: faker.lorem.sentence(),
  spotifyTrackID: faker.random.uuid(),
})

exports.seed = async function(knex, Promise) {
  const fakeUsers = []
  const desiredFakeUsers = 50
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser())
  }
  await knex('users').insert(fakeUsers)

  const fakeTrackReview = []
  const desiredFakeTrackReview = 50
  for (let i = 0; i < desiredFakeTrackReview; i++) {
    fakeTrackReview.push(createFakeTrackReview())
  }
  await knex('trackReview').insert(fakeTrackReview)

  const fakeAlbumReview = []
  const desiredFakeAlbumReview = 50
  for (let i = 0; i < desiredFakeAlbumReview; i++) {
    fakeTrackReview.push(createFakeAlbumReview())
  }
  await knex('trackReview').insert(fakeTrackReview)
}
