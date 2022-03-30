const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
const connectionString  = 'mongodb+srv://Tovintsoa:M12zle9yskype@cluster0.sdryw.mongodb.net/test?authSource=admin&replicaSet=atlas-ntu9xt-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
var url = require('url');
const port = process.env.PORT || 3000;
const path = require('path');
MongoClient.connect(connectionString,{useUnifiedTopology:true}).then(client =>{
    const db = client.db('ekaly');



    // ========================
    // Middlewares
    // ========================

    app.use(bodyParser.json());
    app.use(express.static('public'));
    app.listen(port,function () {
        console.log('Listen port 3000')
    });
    app.get('/',function (req,res) {
        res.sendFile('/front/index.html');
    });
    /**
     * Gestion des restaurant
     */
    app.get('/restaurant',function (req,res) {
        let list = db.collection('user').find({"role":"ROLE_RESTAURANT"}).toArray().then(results => {
            res.json(results);
        });
    });
    app.get("/plat/:userId",function(req,res){
        console.log(req.params['userId']);

        var o_id = new ObjectId(req.params['userId']);
        let list = db.collection('user').findOne({"_id":o_id}).then(results =>{
            /*res.json(results['plat']);*/
            res.json(results.plat);
        })
    });
    app.get('/restaurant/:id',function (req,res) {
        var o_id = new ObjectId(req.params['id']);
        let list = db.collection('user').findOne({"role":"ROLE_RESTAURANT",'_id':o_id}).then(results => {
            res.json(results);
        });
    });



    app.get('/user',function (req,res) {
        let list = db.collection('user').find({"role":"ROLE_USER"}).toArray().then(results => {
            res.json(results);
        });
    });
    app.get('/livreur',function (req,res) {
        let list = db.collection('user').find({"role":"ROLE_LIVREUR"}).toArray().then(results => {
            res.json(results);
        });
    });



    /**
     * Gestion des paniers
     */

    /**
     * Gestion des commandes
     */

    /**
     * Gestion des livraisons
     */


}).catch(error  => console.log(error));