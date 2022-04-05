const config = require("../config/auth.config");
const panierModel = require("../models/panier");
let mongoose = require('mongoose');
exports.getPanier = async(req,res) =>{
    let panier = await panierModel.find({
        utilisateur:req.params['userId']
    });
    await res.json(panier);

};
exports.countPanier = async(req,res) =>{
    let nombre = await panierModel.count({
        utilisateur:req.params['userId']
    }); console.log(nombre);
   await res.json(nombre)
};