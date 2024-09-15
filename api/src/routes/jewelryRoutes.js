const { logRouteAccess } =require('../middlewares')
const { jewelryView } = require('../models/postModel')

const router = express.Router();

router.use(logRouteAccess)

app.get('/inventario', async (req, res) => {
  const inventario = await jewelryView(req.query)
  res.json(inventario)
  })



// Ruta para obtener todas las joyas con HATEOAS
router.get('/joyas', getAllJewels);

// Ruta para obtener joyas con filtros
router.get('/joyas/filtros', getJewelsWithFilters);

module.exports = router;
