const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const userModel = require("../models/user");
verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};
isRestaurant = (req, res, next) => {
    if(userModel.role === 'ROLE_RESTAURANT'){
        next();
        return;

    }
    res.status(403).send({ message: "Require Admin Role!" });

};
isUser = (req, res, next) => {
    if(userModel.role === 'ROLE_USER'){
        next();
        return;

    }
    res.status(403).send({ message: "Require User Role!" });
};
isLivreur = (req, res, next) => {
    if(userModel.role === 'ROLE_LIVREUR'){
        next();
        return;
    }
    res.status(403).send({ message: "Require Livreur Role!" });
};


const authJwt = {
    verifyToken,
    isRestaurant,
    isUser,
    isLivreur
};
module.exports = authJwt;