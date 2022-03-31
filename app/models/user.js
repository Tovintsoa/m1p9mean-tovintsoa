const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
    },
    prenom:{
        type: String,
    },
    email:{
        type: String,
    },
    role:{
        type:String,
    },
    description:{
        type:String
    },
    url_image:{
        type:String
    },
    plat:{
        type:Array
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;