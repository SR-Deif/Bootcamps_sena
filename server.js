const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoints = require('express-list-endpoints')
//conexion DB
const connectDB = require(`./config/db`)

//Dependencias de las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')
const reviewsRoutes = require('./routes/ReviewsRoutes')
//establecer el archivo de configuracion
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1.Crear el objeto aplicacion
const app = express()
app.use(express.json())
//ejecutar conexion DB
connectDB()
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/courses', coursesRoutes)
app.use('/api/v1/reviews', reviewsRoutes)

console.log(listEndpoints(app))
//3. ejecutar servidos de desarrollo express
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT}`.bgMagenta.black)
})