const express = require('express');
const bodyParser = require('body-parser');

module.exports = {
    port : process.env.PORT || 8001,
    mongoUrl : 'mongodb://127.0.0.1/training',
    settingExpress : (app) => {
        app.use(bodyParser.urlencoded({ extended : false}));

        app.use(bodyParser.json());
    },
    secret: 'learn-jp'
}