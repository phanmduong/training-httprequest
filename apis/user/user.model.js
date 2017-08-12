/**
 * Created by phanmduong on 15/03/2017.
 */
'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var user = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    shortDes:{
        type: String,
        required: true,
        minlength: 10
    },
    longDes:{
        type: String,
        required: true,
        minlength: 50
    },
    type: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
    }
});

module.exports = mongoose.model('User', user);
