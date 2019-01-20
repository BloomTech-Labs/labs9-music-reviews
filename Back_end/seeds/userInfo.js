const faker = require('faker')
const createFakeUser = () => ({
  emailAddress: faker.internet.email(),
  paidMembership: faker.random.boolean(),
  reviewCount: faker.random.number(),
  subscriptionExpiration: faker.random.number(),
  nickName: faker.random.word().unique(),
})
exports.seed = async function(knex, Promise) {
  const fakeUsers = []
  const desiredFakeUsers = 50
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser())
  }
  await knex('users').insert(fakeUsers)
}
