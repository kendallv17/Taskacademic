const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Controllers
const AuthController = require('./controllers/AuthController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Rutas posts


module.exports = router;