const express = require("express");
const controller = require("../controllers/commande.controllers");
const app = express();

app.get("/api/commande/liste/:userId", controller.getCommande);

module.exports = app;