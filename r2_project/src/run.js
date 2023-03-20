import productRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import chatRouter from "./routes/chat.router.js"
import { MessageService } from "./repository/index.js"
import productViewsRouter from './routes/products.views.router.js'
import sessionRouter from './routes/session.router.js'
import { passportCall, handlePolicies } from "./utils.js";


const run = (socketServer, app) => {
    app.use((req, res, next) => {
        req.io = socketServer
        next()
    })

    app.use("/products", passportCall('jwt'), handlePolicies(['ADMIN']), productViewsRouter)
    app.use("/session", sessionRouter)


    app.use("/api/products", productRouter)
    app.use("/api/carts", cartRouter)
    app.use("/api/chat", chatRouter)

    app.use("/", passportCall('jwt'), (req, res) => {
        const user = req.user || null
        console.log(user);
        res.render("index", { user })
    })

    socketServer.on("connection", socket => {
        console.log("New client connected")
        socket.on("message", async data => {
        await MessageService.create(data)
        let messages = await MessageService.get()
        socketServer.emit("logs", messages)
        })
    })

    

}

export default run