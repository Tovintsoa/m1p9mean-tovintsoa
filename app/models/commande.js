const mongoose = require("mongoose");

const CommandeSchema = new mongoose.Schema({
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
    },
    status: {
        type: String
    },
    dateCommande:{
        type: Date
    }
});
const Commande = mongoose.model("commandes", CommandeSchema);
module.exports = Commande;