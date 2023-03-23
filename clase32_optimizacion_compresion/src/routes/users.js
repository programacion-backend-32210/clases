import { Router } from "express";
import CustomError from "../services/errors/custom_error.js";
import EErros from "../services/errors/enums.js";
import { generateUserErrorInfo } from "../services/errors/info.js";

const users = []

const router = Router()

router.get('/', (req, res) => {
    res.send({status: 'success', payload: users})
})
router.post('/', (req, res) => {

    const user = req.body


    if(!user.first_name || !user.last_name || !user.email) {
        CustomError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo(user),
            message: 'Error trying to create user',
            code: EErros.INVALID_TYPES_ERROR
        })
    }

    users.push(user)
    res.send({status: 'success', payload: user})

})

export default router