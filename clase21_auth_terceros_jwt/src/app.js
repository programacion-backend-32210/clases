import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import passport from 'passport'
import handlebars from 'express-handlebars'

import sessionRouter from './routes/session.router.js'
import jwtRouter from './routes/jwt.routes.js'
import initializePassport from './config/passport.config.js'
import __dirname from './utils.js'

const app = express()
const MONGO_URL = "mongodb://127.0.0.1:27017"
const MONGO_DB_NAME = "clase21"

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: "CoderSecrets",
    resave: true,
    saveUninitialized: true
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())


app.use('/api/session', sessionRouter)
app.use('/jwt', jwtRouter)

app.get('/', (req, res) => res.send("HOME"))

mongoose.set('strictQuery')
mongoose.connect(MONGO_URL, { dbName: MONGO_DB_NAME }, error => {
    if(error) {
        console.log('No db connected'); return
    }

    console.log('DB connected');
    
    app.listen(8080, () => console.log('Server listening...'))
})
