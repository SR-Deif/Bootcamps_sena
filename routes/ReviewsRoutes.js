const express =require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const {getAllReviews,getSingleReviews,crearReviews,actualizarReviews,eliminarReviews} = require('../controllers/ReviewsController')
const { put } = require('./BootcampRoutes')

//Rutas de Reviews
router.route('/')
    .get(getAllReviews)
    .post(crearReviews)

router.route('/:id')
    .get(getSingleReviews)
    .put(actualizarReviews)
    .delete(eliminarReviews)

module.exports = router