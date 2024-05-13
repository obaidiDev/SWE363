const Freelancer = require("../models/db_schema").Freelancer;

//tested
async function createFreelancer(freelancerData){
    return await Freelancer.create(freelancerData);
}

//tested
async function deleteFreelancerById(freelancerId){
    return await Freelancer.deleteOne({_id: freelancerId});
}
//tested
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
    const freelancer = await getFreelancerById(userId);
    return freelancer.save({avatar: imageSrc});
}

async function getEmployers(freelancerId){
    const freelancer = await getFreelancerById(freelancerId);
    return freelancer.workingWith; // list of Ids
}

async function addEmployer(freelancerId, employerId){
    const freelancer = await getFreelancerById(freelancerId);
    const employers = freelancer.workingWith;
    employers.push(employerId);
    return await freelancer.save();
}

async function tester(){
    // const fadel = await createFreelancer({name:"fadel",email:"fadel",password:"fadel"});
    const fadel = await getFreelancerById("664256799c7b589af9469bf4");
    // await addEmployer("664256799c7b589af9469bf4","66420c5b1eab539f8fe08eb1");
    const employers = await getEmployers("664256799c7b589af9469bf4");
    console.log(employers);
}