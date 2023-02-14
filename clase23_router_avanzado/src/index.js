import express from 'express'

const app = express()

const words = []
app.param('word', async(req, res, next, word) => {
    
    if(!word) req.word = null
    else req.params.word = word.toLowerCase()

    next()
})

// ó = %C3%B3
app.get('/api/dictionary/:word', async(req, res) => {
    const word = req.params.word
    res.send(`Significado de la palabra [${word}]`)
})

app.get('/api/dictionary/:word/:language[a-z]', async(req, res) => {
    const word = req.params.word
    res.send(`Significado de la palabra [${word}]`)
})

app.post('/api/dictionary/:word', async(req, res) => {

    res.send(`Significado de la palabra [${word}]`)
})

app.get('*', (req, res) => {
    res.status(404).send('No se puede maner la palabra')
})

app.listen(8080)
