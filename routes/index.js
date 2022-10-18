import express from 'express'
import {pageStart, pageAbout, pageTrips, pageTestimomials, pageDetail} from '../controllers/paginaControllers.js';

import { saveTestimonial } from '../controllers/testimonialController.js';

const router = express.Router()

router.get('/', pageStart)

router.get('/about', pageAbout)

router.get('/trips', pageTrips)

router.get('/trips/:slug', pageDetail)

router.get('/testimonials', pageTestimomials)

router.post('/testimonials', saveTestimonial)

export default router