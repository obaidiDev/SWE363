const User = require("../models/db_schema").User;
const getFreelancersById = require("./freelancer_controller").getManyFreelancersByIds;

//tested
async function createUser(userData){
    return await User.create(userData);
}

//tested
async function getUserById(userId){
    return await User.findOne({_id: userId});
}

//tested
async function getManyUsersByIds(userId){
    return await User.find({ _id: { $in: userId } });
}

//tested
async function deleteUserById(userId){
    return await User.deleteOne({_id: userId});
}

async function getFreelancers(userId){
    const user = await getUserById(userId);
    return await getFreelancersById(user.freelancers);
}

async function addFreelancers(userId, freelancersToAdd){
    const user = await getUserById(userId);
    const freelancers = user.freelancers;
    freelancers.push([freelancersToAdd]);
    return await user.save();
}
 // tesetd
async function setAvatar(userId, imageSrc){
    const user = await getUserById(userId);
    return user.save({avatar: imageSrc});
}

async function tester(){
    // const fadel = await createUser({username: "Fadel", email: "fadel", password: "fadel"});
    const fadel = await getManyUsersByIds('66420c5b1eab539f8fe08eb1');
    console.log(await getFreelancersById("66420c5b1eab539f8fe08eb1"))
    console.log(fadel);
}
tester();

module.exports = {getManyUsersByIds}