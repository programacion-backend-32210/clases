import passport from "passport";
import jwt from 'passport-jwt'


const PRIVATE_KEY ="CoderHouseMy_Sect76as_a"
const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

const cookieExtractor = req => {
    const token = (req && req.cookies) ? req.cookies['myCookieForTheToken'] : null

    console.log('COOKIE EXTRACTOR', token);
    return token
}

const initializePassport = () => {

        passport.use('jwt', new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: PRIVATE_KEY
        }, async(jwt_payload, done) => {

            try {
                return done(null, jwt_payload)
            } catch (error) {
                return done(error)
            }
            
        }))


}

export default initializePassport