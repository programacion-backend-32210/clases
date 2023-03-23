import express from 'express'
import userRouter from './routes/users.js'
import errorHandler from './middlewares/error.js'

const app = express()
app.use(express.json())

app.use('/api/user', userRouter)
app.use(errorHandler)

app.listen(8080)