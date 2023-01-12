import express from 'express'
import userModel from './models/user.model.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
// Show User
app.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({ result: 'success', payload: users })

    } catch (error) {
        console.log(error);
        res.send({result: 'error', error })

    }
})

// Insert  user
app.post('/', async(req, res) => {
    const result = await userModel.create(req.body)

    res.send({status: "success", payload: result})
})

// Actualizar user
app.put('/:uid', async(req, res) => {
    const uid = req.params.uid

    const userToReplace = req.body
    const result = await userModel.updateOne({_id: uid}, userToReplace)

    res.send({status: "success", payload: result})
})

app.delete('/:uid', async(req, res) => {
    const uid = req.params.uid

    const result = await userModel.deleteOne({_id: uid})
    res.send({status: "success", payload: result})
})

mongoose.connect('mongodb+srv://r2d2:TImCZj6dj0XAaHFN@cluster0.gl63h07.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'myFirstDatabase',
}, (error) => {
    if(!error) {
        console.log('DB connected');
        app.listen(8080, () => console.log('running...'))
    }
    else console.log('Cant connect to DB');
})

