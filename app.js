const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.use(bodyParser.urlencoded({extended:true}));
const connectionString  = 'mongodb+srv://Tovintsoa:M12zle9yskype@cluster0.sdryw.mongodb.net/test?authSource=admin&replicaSet=atlas-ntu9xt-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
var url = require('url');


MongoClient.connect(connectionString,{useUnifiedTopology:true}).then(client =>{
    const db = client.db('ekaly');


    // ========================
    // Middlewares
    // ========================
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(express.static('public'));
    app.listen(3000,function () {
        console.log('Listen port 3000')
    });
    app.get('/',function (req,res) {
        let list = db.collection('user').find().toArray().then(results => {
            res.json(results);
        });

    });

    
}).catch(error  => console.log(error));