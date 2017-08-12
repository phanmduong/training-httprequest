/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var UserController = require('./user.controller');

router.get('/get-all', UserController.getAll);
router.post('/upload', UserController.uploadImage);


module.exports = router;
