const express = require('express');
const router = express.Router();
const {
  getAllJewels,
  getJewelsWithFilters
} = require('../controllers/jewelryController');

// Ruta para obtener todas las joyas con HATEOAS
router.get('/joyas', getAllJewels);

// Ruta para obtener joyas con filtros
router.get('/joyas/filtros', getJewelsWithFilters);

module.exports = router;
