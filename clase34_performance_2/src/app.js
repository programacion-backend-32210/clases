import mongoose from "mongoose";
import express from 'express'
import sessionRouter from './routes/sessions.route.js'
import { faker } from '@faker-js/faker'

const app = express()
const PORT = 8080
const connection = mongoose.connect(`mongodb://127.0.0.1:27017`)

app.use(express.json())

app.use('/api/session', sessionRouter)

app.get('/api/test/user', (req, res) => {
    const user = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }

    res.send(user)
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))