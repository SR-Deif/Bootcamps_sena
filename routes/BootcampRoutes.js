const express =require('express')
const router = express.Router()

//Establecer las rutas de bootcamp
//Crear rutas
//1. get: solo obtener datos Read
router.get('/', (req, res)=>{
    res.status(200).json({
        "Message": "Hola tú"
    })    
})

//2. get obtener recursos por id
router.get('/:id', (req, res)=>{
    res.status(200).json({
        "Message": `Hola tú, con el id ${req.params.id}`
    })
})

//Post: crear un nuevo recurso
router.post('/', (req, res)=>{
    res.status(201).json({
        "Message": "Nuevo?¿"
    })
})

//Put: Actualizar dato
router.put('/:id', (req, res)=>{
    res.status(200).json({
        "Message": `Creo que aqui se actualiza ${req.params.id}`
    })
})
//Delete: Eliminar un dato
router.delete('/:id', (req, res)=>{
    res.status(200).json({
        "Message": `Creo que aqui se elimino el dato ${req.params.id}`
    })
})

module.exports = router