const mongoose = require("mongoose");

const PlatSchema = new mongoose.Schema({
    nom:{
        type:String
    },
    prix:{
        type:Number
    }
});
const Plat = mongoose.model("plat", PlatSchema);
module.exports = Plat;