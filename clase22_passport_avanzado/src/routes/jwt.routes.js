import passport from "passport";
import { Router } from "express";
import { generateToken, authToken, passportCall, authorization } from "../utils.js";

const router = Router()


const users = [
    {email: 'r2@gmail.com', password: 'secret', rol: 'user'},
    {email: 'admin@gmail.com', password: 'secret', rol: 'admin'}
]
router.post('/register', (req, res) => {
    const user = req.body

    if(users.find(u => u.email === user.email)) {
        return res.status(400).send({status: 'error', error: "User already exits"})
    }

    users.push(user)
    const access_token = generateToken(user)

    res.send({status: "success", access_token })
})

router.post('/login', (req, res) => {
    const {email, password} = req.body

    const user = users.find(u => u.email === email && u.password === password)
    if(!user) return res.status(400).send({status: 'error', error: 'Invalid credentiasls'})

    const access_token = generateToken(user)

    res.cookie('myCookieForTheToken', access_token).send({status: "success" })
})

router.get('/private', passportCall('jwt'), authorization('user'), (req, res) => {
    res.send({status: 'success', payload: req.user, rol: "USER"})
})

router.get('/secret', passportCall('jwt'), authorization('admin'), (req, res) => {
    res.send({status: 'success', payload: req.user, rol: "ADMIN"})
})

export default router