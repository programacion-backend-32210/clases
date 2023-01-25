import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import ViewsRouter from './routes/views.routes.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


app.use('/', ViewsRouter)

mongoose.connect('mongodb://127.0.0.1:27017', {dbName: 'test'}, () => {
    app.listen(8080, () => console.log('Listening...'))
})