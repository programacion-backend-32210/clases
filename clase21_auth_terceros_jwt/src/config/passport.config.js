import passport from "passport"
import UserModel from "../models/user.model.js";
import GitHubStrategy from "passport-github2"

const initializePassport = () => {


    passport.use('github', new GitHubStrategy({
        clientID: "Iv1.fcb7e1c55ccfd975",
        clientSecret: "b9f1c68f0437f7becdd4c1c68fe2a2af2ad36c22",
        callbackURL: "http://127.0.0.1:8080/api/session/githubcallback"
    }, async(accessToken, refreshToken, profile, done) => {
        console.log(profile);

        try {
            const user = await UserModel.findOne({email: profile._json.email})
            if(user) return done(null, user)

            const newUser = await UserModel.create({
                first_name: profile._json.name,
                last_name: "",
                email: profile._json.email,
                password: ""
            })

            return done(null, newUser)
        } catch (error) {
            return done('Error to login with github' + error)
        }
    }))


    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    })

}

export default initializePassport