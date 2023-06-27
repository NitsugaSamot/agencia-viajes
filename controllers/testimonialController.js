import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res)  => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }

    // revisar por erroes
    if(errores.length > 0 ){
        const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre, 
            correo, 
            mensaje,
            testimoniales,
            pagina: 'Testimoniales'
        });
    } else {
        // almacenalo en la BD

        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

};



export {
    guardarTestimonial
}

// import {Testimonial} from '../models/Testimonial.js'

// const guardarTestimonial = async(req, res) => {
//     // console.log(req.body)
//     //Validar
//     const {nombre, correo, mensaje} = req.body

//     const errores = []

//     if(nombre.trim() === '') errores.push({mensaje: 'El nombre esta vacío'})
//     if(correo.trim() === '') errores.push({mensaje: 'El correo esta vacío'})
//     if(mensaje.trim() === '') errores.push({mensaje: 'El mensaje esta vacío'})

//     if(errores.length > 0){

//         //
//         res.render('testimoniales', {
//             pagina: 'Testimoniales',
//             errores,
//             nombre,
//             correo,
//             mensaje
//         })
//     }else {
//         try {
//             await Testimonial.create({
//                 nombre,
//                 correo,
//                 mensaje
//             })

//             res.redirect('/testimoniales')
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }



// export {
//     guardarTestimonial,
// }