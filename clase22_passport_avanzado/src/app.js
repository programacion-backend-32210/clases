import express from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import initializePassport from './config/passport.config.js'
import __dirname from './utils.js'


import jwtRouter from './routes/jwt.routes.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser('coderCookieMyToken'))

initializePassport()
app.use(passport.initialize())

app.use(express.static(__dirname + '/public'))

app.use('/jwt', jwtRouter)
app.get('/', (req, res) => res.send('OK'))

app.listen(8080)