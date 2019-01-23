const express = require('express');
const dbReviews = require('../data/albumReviewsDb.js');
const router = express.Router();

router.use(express.json());

// need to add middleware to verify user and tie that user to the written review.

// get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await dbReviews.retrieve();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({
      message: 'failed to retrieve reviews data.',
    });
  }
});

// get review by ID
router.get('/:albumReviewID', async (req, res) => {
  const { albumReviewID } = req.params;
  try {
    const review = await dbReviews.retrieveById(albumReviewID);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({
      message: 'failed to retrieve review with the specific Review ID.',
    });
  }
});

// create new review
// need to add middleware
router.post('/', async (req, res) => {
  //const { userId } = req.params
  const review = req.body;
  if (!review.review) {
    res.status(400).json({
      message: "Review cannot be blank."
    });
  } else {
    // else if (!userId){
    //     res.status(400).json({
    //         message: `The user with user ID ${userId} does not exist.`
    //     })
    // }
    try {
      const newReview = await dbReviews.write(review);
      res.status(200).json(newReview);
    } catch (err) {
      res.status(500).json({
        message: 'Failed to write new review.',
      });
    }
  }
});

// update selected review
router.put('/:albumReviewID', async (req, res) => {
  const { albumReviewID } = req.params;
  const review = req.body;
  if (!review.review) {
    res.status(400).json({
      message: "Review text cannot be blank."
    });
  } else {
    try {
      const updatedReview = await dbReviews.edit(albumReviewID, review);
      res.status(200).json(updatedReview);
    }
    catch (err) {
      res.status(500).json({
        message: "Failed to update selected review."
      })
    };
  };

});

// delete selected review
router.delete('/:albumReviewID', async (req, res) => {
  const { albumReviewID } = req.params;
  try {
    const removeReview = await dbReviews.remove(albumReviewID);
    res.status(200).json({
      message: 'Review deleted.',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete selected review.',
    });
  }
});

module.exports = router;
