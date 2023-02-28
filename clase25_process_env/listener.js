import express from 'express'

process.on('exit', code => {
    console.log('Este code se ejecuta justo antes de salir del proceso')
})

process.on('uncaughtException', code => {
    console.log('Este code se ejecuta cuando se lanza una exception no contrala');
})

process.on('message', message => {
    console.log("Este code se ejecuand cuando recibe un mensaje de otro proceso")
})

// console.log('ID process: ', process.pid);

// const app = express()
// app.listen(8080)

process.exit(1)