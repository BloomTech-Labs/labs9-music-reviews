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
  return db('likedAlbumReview');
};

function retrieveById(id) {
  return db('likedAlbumReview')
    .where({ likedAlbumReviewID: id });
};

function write(review) {
  return db('likedAlbumReview')
    .insert(review)
    .then(ids => ({ likedAlbumReviewID: ids[0] }));
};

function edit(id, review) {
  return db('likedAlbumReview')
    .where({ likedAlbumReviewID: id })
    .update(review);
};

function remove(id) {
  return db('likedAlbumReview')
    .where({ likedAlbumReviewID: id })
    .del();
}