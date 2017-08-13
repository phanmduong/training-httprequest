/**
 * Created by phanmduong on 15/03/2017.
 */

var User = require('./user.model');

module.exports = {

    uploadImage: function (req, res) {

        try {
            var newUser = new User({
                author: req.body.author,
                shortDes: req.body.shortDes,
                longDes: req.body.longDes,
                type: req.body.type,
                dateUpdate: req.body.dateUpdate,
                imgUrl: req.body.imgUrl,
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
