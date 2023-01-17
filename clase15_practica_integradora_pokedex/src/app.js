import express from 'express'
import handlebars from 'express-handlebars'
import pokeRouter from './routes/pokedex.router.js'
import trainerRouter from './routes/trainer.router.js'
import __dirname from './utils.js'

const app = express()

//Configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Carpeta publica
app.use(express.static( __dirname + '/public'))

// Congfiguracion de rutas
app.use('/pokedex', pokeRouter)
app.use('/trainer', trainerRouter)
app.get('/', (req, res) => res.send('Wrok great!'))

// Corriendo el servidor
const server = app.listen(8080, () => console.log('Server listening...'))
server.on('error', e => console.log(e))