const express = require("express");
const controller = require("../controllers/panier.controllers");
const app = express();

app.get("/api/panier/:userId", controller.getPanier);
app.get("/api/panier/nombre/:userId",controller.countPanier)

module.exports = app;
