const Review = require("../models/db_schema").Review;

async function createReview(reviewData){
    return await Review.create(reviewData);
}

async function getReviewById(reviewId){
    return await Review.findOne({_id: reviewId});
}

async function getManyReviewsById(reviewId){
    return await Review.find({_id: {in: reviewId}});
}

async function getReviewDetails(reviewId){
    const review =  await Review.findOne({_id: reviewId});
    return review.text, review.author;
}
async function getReviewAbout(reviewId){
    const review =  await Review.findOne({_id: reviewId});
    return review.about;
}