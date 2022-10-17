const { User } = require('../models/index');
const { findAll } = require('./CourseController');

module.exports = {

    async find(req, res, next) {
        let user = await User.findByPk(req.params.id);

        if (!user) {
            res.status(404).json({ msg: "El post no encontrado" });
        } else {
            req.user = user;
            next();
        }
    },

    // Show
    async show(req, res) {
        res.json(req.user);
    },

    // Update
    async update(req, res) {

        req.post.title = req.body.title;
        req.post.body = req.body.body;

        req.post.save().then(post => {
            res.json(post);
        })

    },


}