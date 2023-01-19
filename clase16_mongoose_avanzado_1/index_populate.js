import studentModel from './models/student.model.js'
import mongoose from 'mongoose'
import courseModel from './models/courses.model.js'

const uri = 'mongodb+srv://r2d2:TImCZj6dj0XAaHFN@cluster0.gl63h07.mongodb.net/?retryWrites=true&w=majority'

const env = async() => {
    await mongoose.connect(uri, {
        dbName: 'myFirstDatabase'
    })

    console.log('DB connected');

    // await studentModel.create({
    //     first_name: "Jhonatan",
    //     last_name: "Pintos",
    //     gender: "Male"
    // })

    // await courseModel.create({
    //     title: "Defensa Contra las Artes Oscuras",
    //     description: "Saber defenderse de ataques oscuros",
    //     difficulty: 5,
    //     topics: ["Spectro Patronus", "Expeliermus"],
    //     professor: "Lupin"
    // })

    // const student = await studentModel.findOne({_id: "63c9cd5ee87b34d7c3bdb874"})
    // student.courses.push({course: "63c9cec58dc8c75e9b7551d8"})
    // const result = await studentModel.updateOne({_id: "63c9cd5ee87b34d7c3bdb874"}, student)
    // console.log(result);

    const student = await studentModel.find({_id: "63c9cd5ee87b34d7c3bdb874"})
    
    console.log(JSON.stringify(student, null, '\t'));


    process.exit()
}

env()

