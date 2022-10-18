import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';


const app = express()

//conectar a la db
db.authenticate()
  .then( ( () => console.log('Database connected')))
  .catch( error => console.log(error) )

//definiendo el puerto
const port = process.env.PORT || 3000

//habilitando pug
app.set('view engine', 'pug')

//middleware para obtener el año
app.use((req, res, next) => {
  const date = new Date()

  res.locals.year = date.getFullYear()
  res.locals.website = 'Travel Agency'
  next()
})

//Agregar body parser para leer un formulario

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

//agregando el router
app.use('/', router)


app.listen(port, () => {
  console.log(`Server on port ${port}`)
})

