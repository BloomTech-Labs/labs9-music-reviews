const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  retrieve,
  retrieveById,
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