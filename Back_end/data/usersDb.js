const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  createNewUser,
  getUser,
};

function createNewUser(newUser) {
  return db('users')
    .select()
    .where({ userId: newUser.user_id })
    .then((user) => {
      if (user.length === 0) {
        const index = newUser.email.indexOf('@');
        const username = newUser.email.slice(0, index);
        return db('users').insert({
          userId: newUser.user_id,
          userName: username,
          emailAddress: newUser.email,
          reviewCount: 0,
          subscriptionExpiration: null,
        });
      } else {
        return null;
      }
    });
}
function getUser(name) {
  return db('users').select().where({ userName: name });
}
