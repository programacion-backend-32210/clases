import {fileURLToPath} from 'url'
import { dirname } from 'path'
import jwt from 'jsonwebtoken'
import passport from 'passport'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PRIVATE_KEY ="CoderHouseMy_Sect76as_a"

export default __dirname

export const generateToken = user => {
    const token = jwt.sign({user}, PRIVATE_KEY, {expiresIn: '24h'})

    return token
}

export const authToken = (req, res, next) => {
    let token = req.headers.auth
    if(!token) token = req.cookies["myCookieForTheToken"]

    if(!token) return res.status(401).send({error: "Not Auth"})

    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if(error) return res.status(403).send({error: "Not authorized"})

        req.user = credentials.user
        next()
    })

}

export const passportCall = (strategy) => {
    return async(req, res, next) => {
        passport.authenticate(strategy, function(err, user, info) {
            if(err) return next(err)
            if(!user) {
                return res.status(401).send({error: info.messages ? info.messages : info.toString()})
            }

            req.user = user
            next()
        })(req, res, next)
    }
}

export const authorization = (role) => {
    return async(req, res, next) => {
        const user = req.user.user
        if(!user) return res.status(401).send({error: "Unauthorized"})
        if(user.rol != role) return res.status(403).send({error: "No Permission"})

        return next()
    }
}