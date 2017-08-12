/**
 * Created by phanmduong on 15/03/2017.
 */

var User = require('./user.model');

module.exports = {

    uploadImage: function (req, res) {

        try {
            var newUser = new User({
                author: req.body.username.toLowerCase(),
                shortDes: req.body.password,
                longDes: req.body.name,
                type: req.body.email,
                dob: req.body.gender,
                imgUrl: req.body.dob,
                favorite: (req.body.favorite) ? req.body.favorite : false
            });
        } catch (e) {

        }

        newUser.save(function (err, user) {
            if (err) {
                res.json({status: false, message: err});
            } else {
                res.json({status: true, message: "Upload thành công."});
            }
        })
    },

    getAll:  function (req, res) {
        User.find().exec(function (err, user) {
            if (err) {
                res.json({status: false, message: err});
            } else {
                res.json({status: true, data: user});
            }
            });
    }

};
