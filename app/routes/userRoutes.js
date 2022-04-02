const express = require("express");
const userModel = require("../models/user");
const app = express();
let mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

app.get("/restaurant", async (request, response) => {
    const user = await userModel.find({"role":"ROLE_RESTAURANT"});
    response.json(user);
});
app.get("/restaurant/:userId", async function(req,res){

    var o_id = mongoose.Types.ObjectId(req.params['userId']);
    const list = await userModel.findOne({"_id":o_id});
    res.json(list);
});
app.get("/plat/:userId", async function(req,res){

    var o_id = mongoose.Types.ObjectId(req.params['userId']);
    const list = await userModel.findOne({"_id":o_id});
   res.json(list.plat);
   // res.json(list);
});
app.post("/userAdd", async (request, response) => {
    console.log(request.body);
    const client = new userModel(request.body);
    try {
        await client.save();
        response.send(client);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;