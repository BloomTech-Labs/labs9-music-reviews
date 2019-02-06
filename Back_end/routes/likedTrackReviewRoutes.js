const express = require('express')
const dbLikedTrackReviews = require('../data/likedTrackReviewDB.js')
const router = express.Router()

router.use(express.json())

// get all liked Reviews
// *****************************************************//
router.get('/', async (req, res) => {
  try {
    const likedTrack = await dbLikedTrackReviews.retrieve()
    res.status(200).json(likedTrack)
  } catch (err) {
    res.status(500).json(err.message)
  }
})
// get one liked review by id
// ******************************************************
router.get('/:likedTrackReviewID', async (req, res) => {
  const { likedTrackReviewID } = req.params
  try {
    const likedTrackReview = await dbLikedTrackReviews.retrieveById(likedTrackReviewID)
    res.status(200).json(likedTrackReview)
  } catch (err) {
    res.status(500).json(err.message)
  }
})
// **********************************************************
// create a new like track review
router.post('/', async (req, res) => {
  const likedTrackReview = req.body
  if (!likedTrackReview) {
    res.status(400).json({ message: 'review to be added cannot be empty' })
  } else {
    try {
      const newLikedTrackReview = await dbLikedTrackReviews.write(likedTrackReview)
      res.status(200).json(newLikedTrackReview)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
})
// **************************************************************
router.put('/:likedTrackReviewID', async (req, res) => {
  const { likedTrackReviewID } = req.params
  const likedTrackReview = req.body
  if (!likedTrackReview) {
    res.status(400).json({ message: 'edited content cannot be empty' })
  } else {
    try {
      const updatedLikedTrackReview = await dbLikedTrackReviews.edit(likedTrackReviewID, likedTrackReview)
      res.status(200).json(updatedLikedTrackReview)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
})
// ***********************************************************************************
router.delete('/:likedTrackReviewID', async (req, res) => {
  const { likedTrackReviewID } = req.params
  try {
    const removedTReview = await dbLikedTrackReviews.remove(likedTrackReviewID)
    res.status(200).json(removedTReview)
  } catch (err) {
    res.status(500).json(err.message)
  }
})
module.exports = router
