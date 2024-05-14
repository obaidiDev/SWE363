const User = require('../models/db_schema').User;
const Freelancer = require('../models/db_schema').Freelancer;

async function authenticate(isFreelancer, username, password){
    if(isFreelancer)
        return Freelancer.findOne({username:username, password:password}) != null;
    else
        return User.findOne({username:username,password:password}) != null;
}
module.exports = authenticate;