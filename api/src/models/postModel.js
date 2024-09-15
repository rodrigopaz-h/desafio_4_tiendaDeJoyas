const { pool } = require('../db/config');
const format = require('pg-format');
const { handleGenerateHATEOAS } = require('../helpers/helpers');

const jewelryView = async ({ limit = 2, order_by = "id_ASC", offset = 0, page = 1}) => {
    try {
    const [field, order] = order_by.split("_")

    const SQLrequest = 'SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s'
    const formattedQuery = format(SQLrequest, field, order, limit, offset);
    
    const { rows: inventario } = await pool.query(formattedQuery)
    return inventario

    const data = {
        rows,
        count,
        type: 'client',
        limit,
        pages: Math.floor(count / limit),
        offset: page * limit
    }

    return handleGenerateHATEOAS(data)

} catch (error) {
    throw error
}


module.exports = { jewelryView };