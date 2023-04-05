import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()

app.use(addLogger)
app.get('/', (req, res) => {
    req.logger.fatal('Advertencia !!')
    res.send({message: 'Logger Test'})
})

app.get('/testing', (req, res) => {
    req.logger.error('Se cayo el server 🥪 ')
    req.logger.warning('Dont worry, it is just a warning')
    req.logger.info('Se llamo a esta url')
    req.logger.debug('1 + 1 === 2 ????')

    res.send({message: 'Maximo Rocks !!'})
})

app.listen(8080, () => console.log('Listening...'))