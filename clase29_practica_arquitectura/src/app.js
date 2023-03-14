import express from 'express'
import usersRouter from './routes/users.router.js'
import ordersRouter from './routes/orders.router.js'
import storesRouter from './routes/stores.router.js'

const PORT = process.env.PORT || 8080
const app = express()

app.use('/api/users', usersRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/stores', storesRouter)


app.listen(PORT, () => console.log(`Running on ${PORT}`))
