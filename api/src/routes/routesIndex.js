// routes/routesIndex.js

const express = require('express');
const postRoutes = require('./postRoutes');

// Crear el enrutador principal
const router = express.Router();

// Rutas de posts
router.use('/posts', postRoutes);

// Exportar el enrutador principal
module.exports = router;
