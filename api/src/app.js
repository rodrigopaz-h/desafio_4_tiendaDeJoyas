const express = require('express')
const morgan = require('morgan')
const jewelryRoutes = require('./src/routes/jewelryRoutes');
const cors = require('cors')

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// Rutas
app.use('/', jewelryRoutes);

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use('/', router)