const express =require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const {getAllUsers,getSingleUser,crearUser,actualizarUser,eliminarUser} = require('../controllers/UserController')
const { put } = require('./BootcampRoutes')

//Rutas de usuarios
router.route('/')
    .get(getAllUsers)
    .post(crearUser)

router.route('/:id')
    .get(getSingleUser)
    .put(actualizarUser)
    .delete(eliminarUser)

module.exports = router