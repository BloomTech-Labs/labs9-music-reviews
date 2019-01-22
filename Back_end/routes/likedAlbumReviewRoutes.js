const express = require('express')
const dbLikedAlbumReviews = require('../data/likedAlbumReviewDB.js')
const router = express.Router()

router.use(express.json())

//get all liked reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await dbLikedAlbumReviews.retrieve()
    res.status(200).json(reviews)
  }
  catch (err) {
    res.status(500).json({
      message: 'failed to retrieve reviews data.',
    })
  }
})

// get liked review by id
router.get('/:likedAlbumReviewID', async (req, res) => {
  const { likedAlbumReviewID } = req.params;
  try {
    const likedReview = await dbLikedAlbumReviews.retrieveById(likedAlbumReviewID);
    res.status(200).json(likedReview)
  } catch (err) {
    res.status(500).json({
      message: 'failed to retrieve with specific id',
    });
  }
});

// create a new liked album review
router.post('/', async (req, res) => {
  const likedAlbumReview = req.body;
  if ((!likedAlbumReview.like || likedAlbumReview.dislike) && (likedAlbumReview.like || !likedAlbumReview.dislike)) {
    res.status(400).json({ message: 'choose like or dislike' })
  } else {
    try {
      const newLikedAlbumReview = await dbLikedAlbumReviews.write(likedAlbumReview)
      res.status(200).json(newLikedAlbumReview)
    } catch (err) {
      res.status(500).json({ message: 'It was not written' })
    }
  }
})

// update selected liked review
router.put('/', (req, res) => {
const {id} = req.params;
const  likedAlbumReview = req.body
dbLikedAlbumReviews.edit(id, likedAlbumReview).then()

})


module.exports = router