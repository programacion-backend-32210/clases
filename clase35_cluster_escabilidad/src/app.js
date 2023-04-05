import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send({ status: 'success', message: `From Docker` })
})

app.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i
    }

    res.send({ sum })
})


app.listen(8081, () => console.log(`[${process.pid}] Listening...`))