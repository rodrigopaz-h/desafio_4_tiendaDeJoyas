// authMiddleware.js

// Middleware para autenticar usuarios
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica si existe un encabezado de autorización
  if (!authHeader) {
      return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
  }

  const token = authHeader.split(' ')[1];

  // Aquí podrías agregar lógica para verificar el token
  // Por ejemplo, utilizando JWT (JSON Web Token)
  // jwt.verify(token, 'clave_secreta', (err, decoded) => { ... });

  // Simulación de verificación de token
  if (token !== 'mi-token-valido') {
      return res.status(403).json({ error: 'Token inválido' });
  }

  // Si todo es correcto, pasa al siguiente middleware o ruta
  next();
};

module.exports = authMiddleware;
