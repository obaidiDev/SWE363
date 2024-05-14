const User = require('../models/db_schema').User;
const Freelancer = require('../models/db_schema').Freelancer;

async function authenticate(isFreelancer, email, password){
    if(isFreelancer)
        return Freelancer.findOne({email:email, password:password}) != null;
    else
        return User.findOne({email:email,password:password});
}
module.exports = authenticate;