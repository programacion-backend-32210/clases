import config from "./config/config.js";
import express from 'express'
import { fork } from 'child_process'

const app = express()
console.log(config)

app.get('/', (req, res) => res.send('ok'))

app.get('/suma', (req, res) => {
    const child = fork('./src/operacionCompleja.js')

    child.send('Inicia el proceso!!')

    child.on('message', result => {
        res.send('El resultado de la operacion es ' + result)  
    })
})

console.log('PID global: ', process.pid);
app.listen(config.port, () => console.log(`Listeing...${config.port}`))

