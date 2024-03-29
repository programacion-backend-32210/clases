import { Router } from "express";
import passport from "passport";
import config from "../config/config.js";

const router = Router()

//Vista para registrar usuarios
router.get('/register', (req, res) => {
    res.render('sessions/register')
})

// API para crear usuarios en la DB
router.post('/register', passport.authenticate('register', { failureRedirect: '/session/failregister' }), async (req, res) => {
    res.redirect('/session/login')
})
router.get('/failregister', (req, res) => {
    console.log('Fail Strategy');
    res.send({ error: "Failed" })
})

// Vista de Login
router.get('/login', (req, res) => {
    res.render('sessions/login')
})

// API para login
router.post('/login', passport.authenticate('login', { failureRedirect: '/session/faillogin' }), async (req, res) => {
    if (!req.user) {
        return res.status(400).send({ status: "error", error: "Invalid credentiales" })
    }

    res.cookie(config.jwtCookieName, req.user.token).redirect('/products')
})
router.get('/faillogin', (req, res) => {
    res.send({error: "Fail Login"})
})

// Cerrar Session
router.get('/logout', (req, res) => {
    res.clearCookie(config.jwtCookieName).redirect('/')
})



export default router