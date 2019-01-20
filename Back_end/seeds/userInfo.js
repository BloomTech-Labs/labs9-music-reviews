const faker = require('faker')
const createFakeUser = () => ({
  emailAddress: faker.internet.email(),
  paidMembership: faker.random.boolean(),
  reviewCount: faker.random.number(),
  subscriptionExpiration: faker.random.number(),
  nickName: faker.random.word().unique(),
})

exports.seed = async function(knex, Promise) {
  const fakeUsersInfo = []
  const desiredFakeUsersInfo = 50
  for (let i = 0; i < desiredFakeUsersInfo; i++) {
    fakeUsersInfo.push(createFakeUser())
  }
  await knex('users').insert(fakeUsersInfo)
}
