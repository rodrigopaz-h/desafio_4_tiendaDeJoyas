const express = require('express');
const jewelryRoutes = require('./src/routes/jewelryRoutes');
const { createTable } = require('./src/db/config'); // Asegúrate de importar correctamente

// Crear la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', jewelryRoutes);

// Crear la tabla al iniciar el servidor
createTable().catch(err => {
    console.error('Error al crear la tabla:', err);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
