// db/config.js

const { Pool } = require('pg');
require('dotenv').config();

// Crear una instancia de Pool para manejar la conexión a la base de datos
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '2232',
    database: 'likeme',
    port: 5432,
    allowExitOnIdle: true
});

// Crear la tabla
const createTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS posts (
               id SERIAL PRIMARY KEY,
               titulo VARCHAR(255),
               img VARCHAR(1000),
               descripcion VARCHAR(255)
            );
        `);
        console.log('Tabla creada o ya existe.');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

// Exportar el pool y la función createTable
module.exports = {
    pool,
    createTable
};
