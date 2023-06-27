import  Sequelize  from "sequelize"
import db from '../config/db.js'

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }

} )

export default Viaje

// import mongoose from "mongoose"


// const viajeSchema = mongoose.Schema({
//     titulo: {
//         type: String
//     },
//     precio: {
//         type: String
//     },
//     fecha_ida: {
//         type: Date
//     },
//     fecha_vuelta: {
//         type: Date
//     },
//     imagen: {
//         type: String
//     },
//     descripcion: {
//         type: String
//     },
//     disponibles: {
//         type: String
//     },
//     slug: {
//         type: String
//     }
// }, {
//     timestamps: true,

// })

// const Viaje = mongoose.model('Viaje', viajeSchema)

