const mongoose = require("../db");
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    avatar: {type: String, default: "../client/src/assets/user-icon.png"},
    freelancers: [{type: mongoose.Schema.Types.ObjectId, ref:"Freelancer"}],
})

const  freelancerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    numberOfRatings: Number,
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref:"Review"}],
    avatar: {type: String, default: "../client/src/assets/user-icon.png"},
    workingWith: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}] 
});

const reviewSchema = mongoose.Schema({
    text: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
})

const offerSchema = mongoose.Schema({
    from: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    to: {type: mongoose.Schema.Types.ObjectId, ref:"Freelancer"},
    accepted: Boolean
})

const User = mongoose.model("User",userSchema);
const Freelancer = mongoose.model("reelancer",freelancerSchema);
const Review = mongoose.model("Review",reviewSchema);
const Offer = mongoose.model("Offer",offerSchema);
module.exports = {User,Freelancer,Review,Offer};