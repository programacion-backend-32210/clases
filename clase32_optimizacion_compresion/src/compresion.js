import express from 'express'
import compression from 'express-compression'

const app = express()
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

const server = app.listen(8080, console.log('Listening'));

app.get('/stringlargo', (req, res) => {
    let string = `Este estringes muy largo para el request!!`

    for (let i = 0; i < 10e3; i++) {
        string += `<br>Estamos haciendo este string aun mas largo`
    }

    res.send(string)
})