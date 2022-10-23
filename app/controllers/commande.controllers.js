const config = require("../config/auth.config");
const commandeModel = require('../models/commande');
let mongoose = require('mongoose');

exports.getCommande = async (req,res) =>{

   if(req.params['userId'] !== 'undefined'){
       let commande = await commandeModel.find({
           utilisateur:req.params['userId']
       });
        console.log(commande);
       await res.json(commande);
   }
   else{
       await res.json([]);
   }
};

