import { Router } from "express";
import PaymentService from "../services/payments.service.js";

const router = Router()

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async(req, res) => {
    const productRequested = products.find(p => p.id == parseInt(req.query.id))
    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'usd'
    }

    const service = new PaymentService()
    const result = await service.createPaymentIntent(paymentIntentInfo)

    console.log(result);
    res.send({status: 'success', payload: result})
})

export default router