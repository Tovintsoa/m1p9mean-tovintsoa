const express = require("express");
const userModel = require("../models/user");
const app = express();

app.get("/user", async (request, response) => {
    const user = await userModel.find({});
    console.log(user);
});
app.post("/userAdd", async (request, response) => {
    const food = new userModel(request.body);

    try {
        console.log('ok')
        await food.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;