const { createTable } = require('./src/db/config');

// Crea la tabla al iniciar el servidor
createTable().catch(err => {
    console.error('Error al crear la tabla:', err);
});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/////////////////////////////////////

