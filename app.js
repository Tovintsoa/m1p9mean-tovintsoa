const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./app/routes/userRoutes');
const db = require('./app/config/db.config');
const app = express();
const authRoute = require('./app/routes/authRoute');
const panieRoute = require('./app/routes/panierRoute');
app.use(express.json());

mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((e) => {

    console.log("Connected to the database!");
})
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(userRouter);
app.use(authRoute);
app.use(panieRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});