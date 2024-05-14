const User = require("../models/db_schema").User;

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

//tested
async function getFreelancers(userId){
    const user = await getUserById(userId);
    return user.freelancers; // list of Ids
}

//tested, there is a latency
async function addFreelancer(userId, freelancerId){
    const user = await getUserById(userId);
    const freelancers = user.freelancers;
    freelancers.push(freelancerId);
    return await user.save();
}
 // tesetd
async function setAvatar(userId, imageSrc){
    const user = await getUserById(userId);
    return user.save({avatar: imageSrc});
}

// async function tester(){
//     // const fadel = await createUser({username: "Fadel", email: "fadel", password: "fadel"});
//     const fadel = await getManyUsersByIds('66420c5b1eab539f8fe08eb1');
//     // const freelancer = await addFreelancer("66420c5b1eab539f8fe08eb1","664256799c7b589af9469bf4");
//     console.log(fadel);
// }
// tester();

module.exports = {createUser};