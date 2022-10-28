const sequelize = require('./seq')
const UserModel = require('../models/user')
const colors = require('colors')

//crear funcion asyc para onexion
const connectDB = async () =>{
    try {

        await sequelize.authenticate()
        console.log('Te haz conectado'.bgWhite.black)

    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDB