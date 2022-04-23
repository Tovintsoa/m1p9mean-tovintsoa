const config = require("../config/auth.config");
const commandeModel = require('../models/commande');
let mongoose = require('mongoose');

exports.getCommande = async (req,res) =>{

    let commande = await commandeModel.find({
        utilisateur:req.params['userId']
    });
    await res.json(commande);
};

