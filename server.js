const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Dependencias de las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')

//establecer el archivo de configuracion
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1.Crear el objeto aplicacion
const app = express()

app.use('/api/v1/bootcamps', bootcampRoutes)

//3. ejecutar servidos de desarrollo express
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT}`.bgMagenta.black)
})