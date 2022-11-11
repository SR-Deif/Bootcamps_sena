
const sequelize = require('../config/seq')
//
const {DataTypes, ValidationError} = require('sequelize')
//
const ReviewsModel= require('../models/reviews')

//
const Reviews = ReviewsModel(sequelize, DataTypes)


//1. get: solo obtener datos Read
exports.getAllReviews= async(req, res)=>{
    try {
        const Review = await Reviews.findAll();
        res.status(200).json({
            "success": true,
            "data": Review
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
exports.getSingleReviews=async(req, res)=>{
    try {
        const reviewsId = await Reviews.findByPk(req.params.id)
        //si uaurio no existe
        if(!reviewsId){
            res.status(422).json({
                "success": true,
                "errors": [
                    "usuario no existe"
                ]
            })
        }
        res.status(200).json({
            "success": true,
            "data": reviewsId
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
exports.crearReviews= async(req, res)=>{
    try {
        const newReviews = await Reviews.create( req.body);
        res.status(201).json({
            "success": true,
            "data": newReviews
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

//PUT - PATCH: actualizar
exports.actualizarReviews = async(req , res)=>{
    try {
        //consultar datos actualizados
    const upReviews = await Reviews.findByPk(req.params.id)
    if(!upReviews){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
        )   
    }else{
            //actualizar usuario por id
            await Reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const reviewsAct = await Reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  reviewsAct
            })
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

 //Delete: Eliminar un dato
exports.eliminarReviews= async(req, res)=>{
    //buscar al user por id
    const u = await Reviews.findByPk(req.params.id)
    //eliminar user por id
    await Reviews.destroy({
        where: {
        id: req.params.id
        }
    });
    res.status(200).json({
        "success": true,
        "data": u
    })
}