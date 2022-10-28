
const sequelize = require('../config/seq')
//
const {DataTypes } = require('sequelize')
//
const UserModel= require('../models/user')
//
const User = UserModel(sequelize, DataTypes)
//Establecer las rutas de bootcamp
//Crear rutas
//1. get: solo obtener datos Read
exports.getAllUsers= async(req, res)=>{
    const users = await User.findAll();
    res.status(200).json({
        "success": true,
        "data": users
    })    
}

//2. get obtener recursos por id
exports.getSingleUser=async(req, res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status(200).json({
        "success": true,
        "data": userId
    })
}

//Post: crear un nuevo recurso
exports.crearUser= async(req, res)=>{
    const newUser = await User.create( req.body);
    res.status(201).json({
        "success": true,
        "data": newUser
    })
}

//Put: Actualizar dato
exports.actualizarUser= async(req, res)=>{
    //Actualizar usuario por id
    await User.update(req.body,{
        where:{
        id: req.params.id
        }
    });

    //Consultar datos actualizados
    const upuser =await User.findByPk(req.params.id)


    res.status(200).json({
        "success": true,
        "data":upuser
    })
}

//Delete: Eliminar un dato
exports.eliminarUser=(req, res)=>{
    res.status(200).json({
        "Message": `Creo que se elimino el usuario ${req.params.id}`
    })
}
