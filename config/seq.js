const Sequelize = require('sequelize')

//definir objeto sequelize de conexion
const sequelize = new Sequelize(
    'prueba',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        port: '3307'
    }
)
module.exports = sequelize