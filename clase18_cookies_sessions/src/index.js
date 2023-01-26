import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser("LucasRuedasIsMySecret"))

app.get('/', (req, res) => res.send('ok'))
app.get('/cookie/set', (req, res) => {
    //res.cookie('CookieDeR2', 'Thanos siempre tuvo razon', {maxAge: 5000}).send('Cookie seteada')
    res.cookie('cookieNormal', 'Thanos siempre tuvo razon').send('Cookie seteada')
})

app.get('/cookie/get',  (req, res) => {
    res.send( {
        signed: req.signedCookies,
        normals: req.cookies
    })
})
app.get('/cookie/delete', (req, res) => {
    res.clearCookie('CookieDeR2').send('Cookie Removed')
})

app.get('/cookie/setsigned', (req, res) => {
    res.cookie('CookieDeR2', 'Thanos siempre tuvo razon', {signed: true}).send('Cookie seteada')
})


app.listen(8080)