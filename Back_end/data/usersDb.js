const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  retrieve,
  createNewUser,
  getUser,
  edit,
};

function retrieve() {
  return db('users');
}

function createNewUser(newUser) {
  return db('users')
    .select()
    .where({ firebaseUID: newUser.user_id })
    .then((user) => {
      if (user.length === 0) {
        return db('users').insert({
          firebaseUID: newUser.user_id,
          emailAddress: newUser.email,
          subscriptionExpiration: null,
          nickname: newUser.email.split("@", 1).join()
        });
      } else {
        return null;
      }
    });
}

function getUser(email) {
  return db('users').select().where({ emailAddress: email });
}


function edit(id, date) {
  return db('users')
    .where({ userID: id })
    .update(date)
}
