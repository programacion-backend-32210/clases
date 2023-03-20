import { Router } from "express"
import { CartService } from '../repository/index.js'


const router = Router()

router.get("/", async (req, res) => {
    const carts = await CartService.get()
    res.json({ carts })
})


router.post("/", async (req, res) => {
    const newCart = await CartService.add({})

    res.json({status: "success", newCart})
})


export default router