
const sequelize = require('../config/seq')
//
const {DataTypes, ValidationError} = require('sequelize')
//
const UserModel= require('../models/user')

//
const User = UserModel(sequelize, DataTypes)
//Establecer las rutas de bootcamp
//Crear rutas
//1. get: solo obtener datos Read
exports.getAllUsers= async(req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({
            "success": true,
            "data": users
        })   
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "Error de servidor D:"
        })
    }
 
}

//2. get obtener recursos por id
exports.getSingleUser=async(req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si uaurio no existe
        if(!userId){
            res.status(422).json({
                "success": true,
                "errors": [
                    "usuario no existe"
                ]
            })
        }
        res.status(200).json({
            "success": true,
            "data": userId
        })
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "Error de servidor D:"
        })
    }

}

//Post: crear un nuevo recurso
exports.crearUser= async(req, res)=>{
    try {
        const newUser = await User.create( req.body);
        res.status(201).json({
            "success": true,
            "data": newUser
        })
    } catch (error) {
        if(error instanceof ValidationError){
                    //poner los mensajes e error en variables
        const errores = error.errors.map((e)=>e.message)
        //llevar errres a response
        res.status(422)
        .json({
            "success": false,
            "errors": errores
        })
        }else{
            // errores de server
            res.status(500)
            .json({
                "success": false,
                "errors": "Error de servidor D:"
            })
        }

        //console.log(error.errors[0].message)
    }
    }

//Put: Actualizar dato
exports.actualizarUser= async(req, res)=>{
    try {
        
        if(!upUser){
            //response
            res.status(422).json({
                "success": true,
                "errors": [
                    "usuario no existe"
                ]
            })
            
        }else{
                //Actualizar usuario por id
    await User.update(req.body,{
        
        where:{
        id: req.params.id
        }
    });
    const upUser =await User.findByPk(req.params.id)
    //Consultar datos actualizados
    res.status(200).json({
        "success": true,
        "data":upUser
    })
        }
    } catch (error) {
        res.status(200).json({
            "success": true,
            "data": upUser
        })
    }

}

/*
exports.traerUserPorId = async  (req , res )=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]  
                }
               )   
        }else{
            res.status(200).json(
                {
                    "success": true,
"data": userId  
                }
               )   
        }     
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
 }
*/



//Delete: Eliminar un dato
exports.eliminarUser= async(req, res)=>{
    //buscar al user por id
    const u = await User.findByPk(req.params.id)
    //eliminar user por id
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res.status(200).json({
        "success": true,
        "data": u
    })
}
