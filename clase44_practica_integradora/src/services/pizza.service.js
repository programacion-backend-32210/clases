import PizzaModel from "../models/pizza.model.js";
import { logger } from "../utils/logger.js";
import sendEmail from '../utils/email.js'

export default class PizzaService {

    get = async () => {
        return await PizzaModel.find()
    }

    getByID = async (id) => {
        return await PizzaModel.findById(id)
    }

    create = async (object) => {
        try {
            if (!object.name) throw "Must get a name"
            return await PizzaModel.create(object)
        } catch (error) {
            logger.error(error)
            return {}
        }
    }

    update = async (id, object) => {
        return await PizzaModel.updateOne({ _id: id }, { $set: object })
    }

    delete = async (id) => {
        return await PizzaModel.deleteOne({ _id: id })
    }

    changeNameByEmail = async (id) => {
        const result = await sendEmail({
            to: 'r2coderhouse@gmail.com',
            subject: 'Cambiar nombre de su pizza',
            html: `
                <h2>Ingrese al link:</h2>
                <a href="http://127.0.0.1:3000/change-name/${id}">Cambiar nombre</a>
            `
        })

        return result
    }

}