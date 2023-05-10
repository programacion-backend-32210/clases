import PizzaService from "../services/pizza.service.js";

export default class PizzaController {

    constructor() {
        this.services = new PizzaService()
    }

    get = async (req, res) => {
        res.json(await this.services.get())
    }

    getByID = async (req, res) => {
        const { id } = req.params
        res.json(await this.services.getByID(id))
    }

    create = async (req, res) => {
        const object = req.body
        res.json(await this.services.create(object))
    }

    update = async (req, res) => {
        const { id } = req.params
        const object = req.body
        res.json(await this.services.update(id, object))
    }

    delete = async (req, res) => {
        const { id } = req.params
        res.json(await this.services.delete(id))
    }

    changeNameByEmail = async(req, res) => {
        const { id } = req.params
        res.json(await this.services.changeNameByEmail(id))
    }

}