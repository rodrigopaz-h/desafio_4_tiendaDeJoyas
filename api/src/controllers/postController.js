// controllers/postController.js

// Importar los servicios desde `services/postService`
const { getAllPosts, createPost } = require('../services/postService');


// Función para manejar la solicitud GET para obtener todos los posts
const getPosts = async (req, res) => {
    const posts = await postService.fetchAllPosts();
    res.json(posts);
};

// Función para manejar la solicitud POST para agregar un nuevo post
const addPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    const newPost = await postService.createPost(titulo, img, descripcion);
    res.status(201).json(newPost);
};

// Exportar las funciones para ser utilizadas en las rutas
module.exports = {
    getPosts,
    addPost
};
