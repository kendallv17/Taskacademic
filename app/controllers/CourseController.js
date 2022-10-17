const { Course } = require('../models/index');

module.exports = {

    async find(req, res, next) {
        let course = await Course.findByPk(req.params.id);

        if (!course) {
            res.status(404).json({ msg: "El post no encontrado" });
        } else {
            req.course = course;
            next();
        }
    },

    async findAll(req, res) {
        let courses = await course.findAll({
            where: {userId: req.user.id}
          })
          .then(course => {
            res.json(course);
            })
          .catch(console.error)
    },

    // Show
    async show(req, res) {
        res.json(req.course);
    },

    // Update
    async update(req, res) {

        req.course.title = req.body.title;
        req.course.body = req.body.body;

        req.course.save().then(course => {
            res.json(course);
        })

    },

    // Delete
    async delete(req, res) {
        req.course.destroy().then(course => {
            res.json({ msg: "El post ha sido eliminado " });
        })
    },

}