import mongoose from 'mongoose'
import express from 'express'
import handlebars from 'express-handlebars'
import pokeRouter from './routes/pokedex.router.js'
import trainerRouter from './routes/trainer.router.js'
import __dirname from './utils.js'

const app = express()

// Para traer info de post como JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Carpeta publica
app.use(express.static(__dirname + '/public'))

// Congfiguracion de rutas
app.use('/pokedex', pokeRouter)
app.use('/trainer', trainerRouter)
app.get('/', (req, res) => res.send('Wrok great!'))

const uri = "mongodb+srv://r2d2:TImCZj6dj0XAaHFN@cluster0.gl63h07.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)
mongoose.connect(uri, error => {
    if (error) {
        console.log('No se pudo conectar a la DB');
        return
    }
    console.log('DB connected!');

    // Corriendo el servidor
    const server = app.listen(8080, () => console.log('Server listening...'))
    server.on('error', e => console.log(e))

})