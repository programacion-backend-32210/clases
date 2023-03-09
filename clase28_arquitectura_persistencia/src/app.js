import express from 'express'
import contactsRouter from './routes/contacts.router.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/contacts', contactsRouter)


app.listen(8080)