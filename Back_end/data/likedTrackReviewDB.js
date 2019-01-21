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
  return db('likedTrackReview');
};

function retrieveById(id) {
  return db('likedTrackReview')
    .where({ likedTrackReviewID: id });
};

function write(review) {
  return db('likedTrackReview')
    .insert(review)
    .then(ids => ({ likedTrackReviewID: ids[0] }));
};

function edit(id, review) {
  return db('likeTrackReview')
    .where({ likedTraclReviewID: id })
    .update(review);
};

function remove(id) {
  return db('likedTrackReview')
    .where({ likedTrackReviewID: id })
    .del();
}