const express = require("express");
const controller = require("../controllers/panier.controllers");
const app = express();

app.get("/api/panier/:userId", controller.getPanier);
app.get("/api/panier/nombre/:userId",controller.countPanier);
app.post('/api/ajouterPanier',controller.ajouterPanier);
app.get('/api/deletePanier/:idPanier/:userId',controller.effacerPanier);
app.get('/api/panier/changeQuantite/:idPanier/:qte/:userId',controller.changeQuantite);
module.exports = app;
