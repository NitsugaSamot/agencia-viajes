import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv'
// import conectarDB from './config/db.js'

dotenv.config()

// console.log(process.env.DB_HOST)

const app = express()

//Conectar base de datos
// conectarDB()
db.authenticate()
    .then( () => ('Base de datos conectada') )
    .catch( error => console.log(error));

const port = process.env.PORT || 3005

//Habilitar PUG
app.set('view engine', 'pug')

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'

    return next()
})

//Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la carpeta pública
app.use(express.static('public'))

//Agregar Router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
})

