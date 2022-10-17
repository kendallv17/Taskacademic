const { Semester } = require('../models/index');
const { findAll } = require('./CourseController');

module.exports = {

    async find(req, res, next) {
        let semester = await Semester.findByPk(req.params.id);

        if (!semester) {
            res.status(404).json({ msg: "El semestre no fue encontrado" });
        } else {
            req.semester = semester;
            next();
        }
    },

    async findAll(req, res) {
        let semesters = await Semester.findAll({
            where: {userId: req.user.id}
          })
          .then(semesters => {
            res.json(semesters);
            })
          .catch(console.error)
    },

    // Show
    async show(req, res) {
        res.json(req.semester);
    },

    // Update
    async update(req, res) {

        req.semester.title = req.body.title;
        req.semester.body = req.body.body;

        req.semester.save().then(semester => {
            res.json(semester);
        })

    },

    // Delete
    async delete(req, res) {
        req.semester.destroy().then(semester => {
            res.json({ msg: "El post ha sido eliminado " });
        })
    },

}