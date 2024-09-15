// routes/postRoutes.js

const express = require('express');
const router = express.Router();

// Importar el middleware de autenticación
const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');

// Proteger la ruta POST con el middleware de autenticación
router.get('/', postController.getPosts);
router.post('/', authMiddleware, postController.addPost);

module.exports = router;
