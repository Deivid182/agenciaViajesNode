import { Testimonial } from '../models/Testimoniales.js';

const saveTestimonial = async(req, res) => {

  const { nombre, correo, mensaje } = req.body

  const errores = []

  if(nombre.trim() === '') {
    errores.push({mensaje : 'El nombre está vacío'})
  }

  if(correo.trim() === '') {
    errores.push({mensaje : 'El correo está vacío'})
  }

  if(mensaje.trim() === '') {
    errores.push({mensaje : 'El mensaje está vacío'})
  }

  if(errores.length > 0) {

    //consultar testimoniales existentes
    const testimonials = await Testimonial.findAll() 

    //Mostrar la vista con errores
    res.render('testimonials', {
      page: 'testimonials',
      errores,
      nombre,
      correo,
      mensaje, 
      testimonials
    })
  } else {

    try {
      await Testimonial.create({
        nombre,
        correo, 
        mensaje
      })

      res.redirect('/testimonials')
    } catch (error) {
        console.log(error)
    }
  }

}


export {
  saveTestimonial
}