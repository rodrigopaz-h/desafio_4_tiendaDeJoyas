const { pool } = require('../db/config');

// Función para obtener todas las joyas con HATEOAS
const getAllJewels = async (req, res) => {
  const { limits = 10, page = 1, order_by = 'nombre_ASC' } = req.query;

  const orderOptions = {
    'nombre_ASC': 'ORDER BY nombre ASC',
    'nombre_DESC': 'ORDER BY nombre DESC',
    'precio_ASC': 'ORDER BY precio ASC',
    'precio_DESC': 'ORDER BY precio DESC'
  };

  const orderClause = 'ORDER BY nombre ASC';
  const offset = (page - 1) * limits;
  
  try {
    const result = await pool.query(`
      SELECT * FROM joyas
      ${orderClause}
      LIMIT $1 OFFSET $2
    `, [parseInt(limits), offset]);

    const jewels = result.rows;

    // HATEOAS links
    const hateoasResponse = jewels.map(jewel => ({
      ...jewel,
      _links: {
        self: { href: `/api/joyas/${jewel.id}` }
      }
    }));

    res.json(hateoasResponse);
  } catch (err) {
    console.error('Error al obtener las joyas:', err);
    res.status(500).send('Error al obtener las joyas');
  }
};

// Función para obtener joyas con filtros
const getJewelsWithFilters = async (req, res) => {
  const { precio_max, precio_min, categoria, metal } = req.query;
  
  let query = 'SELECT * FROM joyas WHERE 1=1';
  const queryParams = [];
  
  if (precio_max) {
    query += ' AND precio <= $1';
    queryParams.push(precio_max);
  }
  if (precio_min) {
    query += ' AND precio >= $2';
    queryParams.push(precio_min);
  }
  if (categoria) {
    query += ' AND categoria = $3';
    queryParams.push(categoria);
  }
  if (metal) {
    query += ' AND metal = $4';
    queryParams.push(metal);
  }

  try {
    const result = await pool.query(query, queryParams);
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener las joyas con filtros:', err);
    res.status(500).send('Error al obtener las joyas con filtros');
  }
};

module.exports = {
  getAllJewels,
  getJewelsWithFilters
};
