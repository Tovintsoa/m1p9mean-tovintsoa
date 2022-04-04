const config = require("../config/auth.config");
const userModel = require("../models/user");

exports.findEmail = async (email) => {

    let user = await userModel.findOne({
        email:email
    });
    return user;
};