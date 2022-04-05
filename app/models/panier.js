const mongoose = require("mongoose");

const PanierSchema = new mongoose.Schema({
    restaurant:{
        type: Object
    },
    quantite:{
        type:Number
    },
    plat:{
        type: Object
    },
    netApayer:{
        type:Number
    },
    utilisateur:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }

});
const Panier = mongoose.model("paniers", PanierSchema);
module.exports = Panier;