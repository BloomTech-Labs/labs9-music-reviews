const faker = require('faker');

const createFakeUser = () => ({
  //function to createFakeUser
  username: faker.internet.email(),
  password: faker.internet.password(),
});
exports.seed = async function(knex, Promise) {
  //seed database with fake users
  // Deletes ALL existing entries
  const fakeUsers = [];
  const totalFakeUsers = 400;
  for (let i = 0; i < totalFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex('users').insert(fakeUsers);
};
