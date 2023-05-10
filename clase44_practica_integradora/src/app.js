import express from 'express'
import router from './routes/pizza.router.js'
import mongoose from 'mongoose'
import { loggerHttp } from './utils/logger.js'
import __dirname from './utils/utils.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

const specs = swaggerJSDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentacion de Piizas',
            description: "Details"
        }
    },
    apis: [`${__dirname}/../docs/**/*.yaml`]
})


const app = express()
app.use(express.json())
app.use(loggerHttp)

app.use('/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/change-name/:id', (req, res) => {
    
})
app.use('/api/pizza', router)
app.use('/', (req, res) => res.json({status: 'ok'}))


mongoose.connect('mongodb://127.0.0.1:27017', {dbName: 'db_32210_clase44'}).then(() => {
    app.listen(8080, () => console.log('Running...'))
})