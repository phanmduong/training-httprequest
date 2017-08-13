const express = require('express');
const config = require('./configs');
const mongoose = require('mongoose');

const app = express();


config.settingExpress(app);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const routes = require('./routes')(app);

mongoose.connect(config.mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongodb connected at localhost/training')
});

const port = config.port;

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});



