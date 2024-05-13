const Freelancer = require("../models/db_schema").Freelancer;
const getUsersById = require("./user_controller").getManyUsersByIds;

async function createFreelancer(freelancerData){
    return await Freelancer.create(freelancerData);
}

async function deleteFreelancerById(freelancerId){
    return await Freelancer.deleteOne({_id: freelancerId});
}

async function getFreelancerById(freelancerId){
    return await Freelancer.findOne({_id: freelancerId});
}

async function getManyFreelancersByIds(freelancersId){
    return await Freelancer.find({ _id: { $in: freelancerIds } });
}

async function getFreelancerReviews(freelancerId){
    const freelancer = await getFreelancerById(freelancerId);
    return await freelancer.reviews;
}

async function setAvatar(freelancerId){
    const user = await getUserById(userId);
    return user.save({avatar: imageSrc});
}

async function getEmployers(freelancerId){

}
module.exports = {getManyFreelancersByIds};