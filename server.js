//Access to envs
require('dotenv').config();

//Server packages 
const express = require('express');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

//Cookie packages
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const engines = require('consolidate')
const morgan = require('morgan');

//MongoDB import
const mongo = require('./server/helpers/mongoHelper');

//Server constants
const PORT = 3001;
const app = express();

//Initialize server
var server;
if(process.env.LOCAL_HTTP){
    server = require('https').createServer({
        "hostname": "localhost",
        "agent": false,
        "rejectUnauthorized": false
    }, app);
}else{
    server = require('https').createServer(app);
}

//Cookie configuration
app.use(helmet());
app.use(compress());
app.use(cookieParser());
app.use(cookieSession({
    "secret": process.env.APP_SECRET,
    "maxAge": 86400000,
    "saveUninitialized": false,
    "resave": false,
    "name": "th1s4P4w0rd",
    "key": "th1s4P4w0rd",
    "cookie": {
        "secure": true,
        "httpOnly": true
    }
}));

//Server config
app.engine("html", engines.ejs);
app.set("view engine", "ejs");
app.set("views", __dirname + "/client");
app.use(express.static(__dirname + "/client"));
app.use(express.json());
app.use(express.urlencoded({
    "extended": true,
    "limit": "10mb"
}));

//Debug output
if(process.env.DEBUG){
    app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
}

//Default route
app.get("/", function(req, res) {
    app.use(express.static(__dirname + "/build"));
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});

//Server listener
app.listen(PORT, function(){
    console.log("Server is listening on port " + PORT);
});

//Discord API routes
app.use('/api/discord', require('./server/helpers/discordHelper'));

app.post('/api/findOne', async function(req, res){
    let data = await req.body;
    let db = data.db;
    let collection = data.collection;
    let query = data.query;
    let responseData = await mongo.findDocument(db, collection, query);
    res.status(200).send(JSON.stringify(responseData));
})
