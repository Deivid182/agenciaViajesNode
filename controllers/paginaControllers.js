import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const pageStart = async (req, res) => {

  //consultar tres viajes del modelo viaje

  const promiseDB = []

  promiseDB.push( Viaje.findAll({ limit: 3 }) )
  promiseDB.push( Testimonial.findAll({ limit: 3 }) )

  try {

    const result = await Promise.all( promiseDB )

  res.render('start', {
    page: 'start',
    clase: 'home',
    viajes: result[0],
    testimonials: result[1]
  })
  } catch (error) {
      console.log(error)
  }
}

const pageAbout = (req, res) => {

  res.render('about', {
    page: 'about'
  })
}

const pageTrips = async (req, res) => {

  const viajes = await Viaje.findAll()


  res.render('trips', {
    page: 'trips',
    viajes
  })
}

const pageTestimomials = async (req, res) => {

  try {

    const testimonials = await Testimonial.findAll()

    res.render('testimonials', {
      page: 'testimonials',
      testimonials
    })
  } catch (error) {
      console.log(error)
  }
}

//Mostrando pagina por su slug
const pageDetail = async (req, res) => {

  const { slug } = req.params

  try {
    const viaje = await Viaje.findOne({ where : { slug } })

    res.render( 'trip', {
      page: 'Page Information',
      viaje
    } )
  } catch (error) {
      console.log(error)
  }
}

export {
  pageStart,
  pageAbout,
  pageTrips,
  pageTestimomials,
  pageDetail
}