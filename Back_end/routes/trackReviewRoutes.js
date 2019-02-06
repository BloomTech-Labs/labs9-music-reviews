const express = require('express')
const dbReviews = require('../data/trackReviewsDb.js')
const router = express.Router()

router.use(express.json())

// need to add middleware to verify user and tie that user to the written review.

// get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await dbReviews.retrieve()
    res.status(200).json(reviews)
  } catch (err) {
    res.status(500).json(err.message)
  };
})

// get review by ID
router.get('/:trackReviewID', async (req, res) => {
  const { trackReviewID } = req.params
  try {
    const review = await dbReviews.retrieveById(trackReviewID)
    res.status(200).json(review)
  } catch (err) {
    res.status(500).json(err.message)
  };
})

// get all album reviews written by a single user
router.get('/:userID', async (req, res) => {
  const { userID } = req.params
  try {
    const myReviews = await dbReviews.retrieveByUserId(userID)
    res.status(200).json(myReviews)
  } catch (err) {
    res.status(500).json(err.message)
  };
})

// create new review
// need to add middleware
router.post('/', async (req, res) => {
  // const { userId } = req.params
  const review = req.body
  if (!review.review) {
    res.status(400).json({
      message: 'Review cannot be blank.'
    })
  } else {
    try {
      const newReview = await dbReviews.write(review)
      res.status(200).json(newReview)
    } catch (err) {
      res.status(500).json(err.message)
    };
  };
})

// update selected review
router.put('/:trackReviewID', async (req, res) => {
  const { trackReviewID } = req.params
  const review = req.body
  if (!review.review) {
    res.status(400).json({
      message: 'Review text cannot be blank.'
    })
  } else {
    try {
      const updatedReview = await dbReviews.edit(trackReviewID, review)
      res.status(200).json(updatedReview)
    } catch (err) {
      res.status(500).json(err.message)
    };
  };
})

// delete selected review
router.delete('/:trackReviewID', async (req, res) => {
  const { trackReviewID } = req.params
  try {
    const removeReview = await dbReviews.remove(trackReviewID)
    res.status(200).json({
      message: 'Review deleted.'
    })
  } catch (err) {
    res.status(500).json(err.message)
  };
})

module.exports = router
