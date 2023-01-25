import mongoose from "mongoose";
import UserModel from "./models/user.model.js"

const env = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017', {dbName: "test"})
    console.log('DB connected');

    const users = await UserModel.paginate({gender: "Female"}, {limit: 5, page: 3})
    console.log(users);

    process.exit()
}

env()