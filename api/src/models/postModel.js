// models/postModel.js

const { pool } = require('../db/config');

// Función para obtener todos los posts
const getPosts = async () => {
    const res = await pool.query('SELECT * FROM posts');
    return res.rows;
};

// Función para agregar un nuevo post
const addPost = async (titulo, img, descripcion) => {
    const res = await pool.query(
        'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
        [titulo, img, descripcion]
    );
    return res.rows[0];
};

module.exports = {
    getPosts,
    addPost
};
