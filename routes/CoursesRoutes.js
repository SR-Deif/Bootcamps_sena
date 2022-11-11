const express =require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const {getAllCourses,getSingleCourses,crearCourses,actualizarCourses,eliminarCourses} = require('../controllers/CoursesController')
const { put } = require('./BootcampRoutes')

//Rutas de usuarios
router.route('/')
    .get(getAllCourses)
    .post(crearCourses)

router.route('/:id')
    .get(getSingleCourses)
    .put(actualizarCourses)
    .delete(eliminarCourses)

module.exports = router