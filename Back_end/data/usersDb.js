const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  signUp,
  signIn,
  changeUserSettings,
  getAllUsers,
};

function signUp(user) {
  return db('users').insert(user).then((ids) => ({ id: ids[0] }));
}
function signIn(user) {
  return db('users').where({
    username: user.username,
    password: user.password,
  });
}
function changePassword(user) {
  return db('users').where({ username: user.username }).update(user);
}
function getAllUsers() {
  return db('users');
}
