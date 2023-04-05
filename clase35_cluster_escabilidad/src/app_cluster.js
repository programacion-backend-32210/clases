import cluster from 'cluster'
import { cpus } from 'os'
import express from 'express'

if (cluster.isPrimary) {

    const numProcess = cpus().length
    console.log(`Numero de Procesadores [${numProcess}]`);

    console.log(`Proceso Primario (${process.pid}), generando workers`)

    for(let i = 0; i< numProcess; i++) {
        cluster.fork()
    }

} else {
    const app = express()
    app.get('/', (req, res) => {
        res.send({status: 'success', message: `Peticion from worker ${process.pid}`})
    })

    app.get('/simple', (req, res) => {
        let sum = 0
        for (let i = 0; i < 1000000; i++) {
            sum += i
        }
    
        res.send({ sum })
    })
    
    app.get('/complex', (req, res) => {
        let sum = 0
        for (let i = 0; i < 5e8; i++) {
            sum += i
        }
    
        res.send({ sum })
    })

    app.listen(8080, () => console.log(`[${process.pid}] Listening...`))
}

