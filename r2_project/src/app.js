import express from "express";
import handlebars from "express-handlebars"
import { Server } from "socket.io";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import cookieParser from "cookie-parser";
import initializePassport from "./config/passport.config.js";
import cors from 'cors'

import __dirname from "./utils.js"
import run from "./run.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))
app.use(cookieParser())
app.use(cors())
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

const httpServer = app.listen(8080, () => console.log("Listening..."))
const socketServer = new Server(httpServer)
httpServer.on("error", (e) => console.log("ERROR: " + e))

run(socketServer, app)