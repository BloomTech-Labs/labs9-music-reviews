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
    return db('albumReview');
};

function retrieveById(id) {
    return db('albumReview')
            .where({ albumReviewID: id });
};

function write(review) {
    return db('albumReview')
            .insert(review)
            .then(ids => ({ albumReviewID: ids[0] }));
};

function edit(id, review) {
    return db('albumReview')
            .where({ albumReviewID : id })
            .update(review);
};

function remove(id) {
    return db('albumReview')
            .where({ albumReviewID : id })
            .del();
}