import userModel from './models/users.model.js'
import mongoose from 'mongoose'

const uri = 'mongodb+srv://r2d2:TImCZj6dj0XAaHFN@cluster0.gl63h07.mongodb.net/?retryWrites=true&w=majority'

const env = async() => {
    await mongoose.connect(uri, {
        dbName: 'myFirstDatabase'
    })

    console.log('DB connected');

    const response = await userModel.find({first_name: 'Celia'}).explain('executionStats')
    console.log(response);

}

env()

/**
 * 
 * Find()           3 milisegundos
 * Find('Celia')    4 milisegundos
*  Find('Celia')    1 milisegundo
 * 
 */