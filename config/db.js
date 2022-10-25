const sequelize = require('./seq')
const UserModel = require('../models/user')
const colors = require('colors')
//dependecia
const {DataTypes} = require('sequelize')

const User = UserModel(sequelize, DataTypes)

//crear funcion asyc para onexion
const connectDB = async () =>{
    try {

        await sequelize.authenticate()
        console.log('Te haz conectado'.bgWhite.black)
       // const users = await User.findAll();
       // console.log(users)

    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDB