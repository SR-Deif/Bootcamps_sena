
const sequelize = require('../config/seq')
//
const {DataTypes, ValidationError} = require('sequelize')
//
const CoursesModel= require('../models/courses')

//
const Courses = CoursesModel(sequelize, DataTypes)

exports.getAllCourses= async(req, res)=>{
    try {
        const courses = await Courses.findAll();
        res.status(200).json({
            "success": true,
            "data": courses
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
exports.getSingleCourses=async(req, res)=>{
    try {
        const coursesId = await Courses.findByPk(req.params.id)
        //si uaurio no existe
        if(!coursesId){
            res.status(422).json({
                "success": true,
                "errors": [
                    "Courses no existe"
                ]
            })
        }
        res.status(200).json({
            "success": true,
            "data": coursesId
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
exports.crearCourses= async(req, res)=>{
    try {
        const newcourses = await Courses.create( req.body);
        res.status(201).json({
            "success": true,
            "data": newcourses
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
exports.actualizarCourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upCourses = await Courses.findByPk(req.params.id)
      if(!upCourses){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "Curso no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await Courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const coursesAct = await Courses.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  coursesAct
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
exports.eliminarCourses= async(req, res)=>{
    //buscar al user por id
    const u = await Courses.findByPk(req.params.id)
    //eliminar user por id
    await Courses.destroy({
        where: {
          id: req.params.id
        }
      });
    res.status(200).json({
        "success": true,
        "data": u
    })
}
