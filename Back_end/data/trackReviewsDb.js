const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  retrieve,
  retrieveById,
  retrieveByUserId,
  write,
  edit,
  remove,
};

function retrieve() {
  return db('trackReview');
};

function retrieveById(id) {
  return db('trackReview')
    .where({ trackReviewID: id });
};

function retrieveByUserId(userId) {
  return db('trackReview')
          .where({ userID: userId})
}

function write(review) {
  return db('trackReview')
    .insert(review)
    .then(ids => ({ trackReviewID: ids[0] }));
};

function edit(id, review) {
  return db('trackReview')
    .where({ trackReviewID: id })
    .update(review);
};

function remove(id) {
  return db('trackReview')
    .where({ trackReviewID: id })
    .del();
}