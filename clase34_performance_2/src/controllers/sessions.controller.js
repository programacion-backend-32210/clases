
import UserModel from "../models/user.model.js";
import { createHash, passwordValidation } from "../utils.js";

const register = async(req, res) => {
    const {first_name, last_name, email, password} = req.body
    console.log(`Registering ${first_name} ${last_name} email: ${email} and pwd: ${password}`);

    const exists = await UserModel.findOne({email})
    if(exists) return res.status(400).send({status: 'error'})

    const hashedPassword = await createHash(password)
    await UserModel.create({
        first_name,
        last_name,
        email,
        password: hashedPassword
    })

    res.send({status: 'success', message: 'registered'})
}

const login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password) return res.status(400).send({status: 'error', message: 'no email & password'})

    const user = await UserModel.findOne({email})
    if(!user) return res.status(400).send({status: 'error', message: 'No user'})

    const isValidPassword = await passwordValidation(user, password)
    if(!isValidPassword) return res.status(400).send({status: 'error', message: 'Pass invalide', user})

    console.log(`Login for ${email}`);
    res.send({status: 'success', message: 'logged in'})
}

export default { register, login }