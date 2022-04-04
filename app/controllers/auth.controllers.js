const config = require("../config/auth.config");
const userModel = require("../models/user");

var jwt = require("jsonwebtoken");

exports.signin = (req, res) => {

    userModel.findOne({
        email: req.body.mail
    }).exec((err, user) => {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "Cet email n'est associé à aucun utilisateur" });
        }

        if(req.body.password === user.motdepasse){

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: user._id,
                nom: user.nom,
                prenom:user.prenom,
                email: user.email,
                role: user.role,
                description:user.description,
                accessToken: token
            });
        }
        else{
            return res.status(401).send({
                accessToken: null,
                message: "Vérifier le mot de passe ou l'adresse email"
            });
        }

    });
};