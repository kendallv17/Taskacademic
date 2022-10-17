const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Controllers
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const SemesterController = require('./controllers/SemesterController');
const CourseController = require('./controllers/CourseController');
const TaskController = require('./controllers/TaskController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Ruta Users
router.get('/api/user', auth, UserController.show);

// Rutas semesters
router.get('/api/user/semesters', auth, SemesterController.findAll);
router.get('/api/user/semesters/:id', auth, SemesterController.find, SemesterController.show);
router.patch('/api/user/semesters/:id', auth, SemesterController.find, SemesterController.update);
router.delete('/api/user/semesters/:id', auth, SemesterController.find, SemesterController.delete);

// Rutas courses
router.get('/api/user/semesters/:id/courses', auth, CourseController.findAll);
router.get('/api/user/semesters/:id/courses/:id', auth, CourseController.find, CourseController.show);
router.patch('/api/user/semesters/:id/courses/:id', auth, CourseController.find, CourseController.update);
router.delete('/api/user/semesters/:id/courses/:id', auth, CourseController.find,  CourseController.delete);

// Rutas tasks
router.get('/api/user/semesters/:id/courses/:id/tasks', auth, TaskController.findAll);
router.get('/api/user/semesters/:id/courses/:id/tasks/:id', auth, TaskController.find, TaskController.show);
router.patch('/api/user/semesters/:id/courses/:id/tasks/:id', auth, TaskController.find, TaskController.update);
router.delete('/api/user/semesters/:id/courses/:id/tasks/:id', auth, TaskController.find, TaskController.delete);


module.exports = router;