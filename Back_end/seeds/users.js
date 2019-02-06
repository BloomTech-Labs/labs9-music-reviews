const faker = require('faker')

const createFakeUser = () => ({
  firebaseUID: faker.random.uuid(),
  emailAddress: faker.internet.email(),
  paidMembership: faker.random.boolean(),
  subscriptionExpiration: faker.random.number(),
  nickName: faker.name.lastName(),
})
exports.seed = async function (knex, Promise) {
  const fakeUsers = []
  const desiredFakeUsers = 50
  for (let i = 0;i < desiredFakeUsers;i++) {
    fakeUsers.push(createFakeUser())
  }
  await knex('users').insert(fakeUsers)
} 