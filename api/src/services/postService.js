// src/services/postService.js

// Función para obtener todos los posts
const getAllPosts = () => {
  // Lógica para obtener posts desde la base de datos
  return [
      { id: 1, title: 'Primer Post', description: 'Descripción del primer post' },
      { id: 2, title: 'Segundo Post', description: 'Descripción del segundo post' }
  ];
};

// Función para crear un nuevo post
const createPost = (post) => {
  // Lógica para insertar un nuevo post en la base de datos
  return { message: 'Post creado exitosamente', post };
};

module.exports = {
  getAllPosts,
  createPost
};
