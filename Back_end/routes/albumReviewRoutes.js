const express = require('express');
const dbReviews = require('../data/reviewsDb.js');
const router = express.Router();

router.use(express.json());

// need to add middleware to verify user and tie that user to the written review.

// get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await dbReviews.retrieve();
        res.status(200).json(reviews);
    }
    catch(err) {
        res.status(500).json({
            message: "failed to retrieve reviews data."
        });
    };
});

// get review by ID
router.get('/:albumId', async (req, res) => {
    const { albumId } = req.params;
    try {
        const review = await dbReviews.retrieveById(albumId);
        res.status(200).json(review);
    }
    catch (err) {
        res.status(500).json({
            message: "failed to retrieve review with the specific Review ID."
        });
    };
});

// create new review
// need to add middleware
router.post('/', async (req, res) => {
    //const { userId } = req.params
    const review = req.body;
    if(!review.title || !review.content){
        res.status(400).json({
            message: "Title and content cannot be blank."
        })
    }
    // else if (!userId){
    //     res.status(400).json({
    //         message: `The user with user ID ${userId} does not exist.`
    //     })
    // }
    else {
        try {
            const newReview = await dbReviews.write(review);
            res.status(200).json(newReview);
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to write new review."
            })
        };
    };
});

// update selected review
router.put('/:albumId', async (req, res) => {
    const { albumId } = req.params;
    const review = req.body;
    if(!review.title || !review.content){
        res.status(400).json({
            message: "Title and content cannot be blank."
        })
    } else {
        try {
            const updatedReview = await dbReviews.edit(albumId, review);
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
router.delete('/:albumId', async (req, res) => {
    const { albumId } = req.params;
    try {
        const removeReview = await dbReviews.remove(albumId);
        res.status(200).json({
            message: "Review deleted."
        })
    }
    catch (err){
        res.status(500).json({
            message: "Failed to delete selected review."
        });
    };
});

module.exports = router;