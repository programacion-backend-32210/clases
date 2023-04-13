import { UserService } from "../repositories/index.js";

export const get = async(req, res) => {
    const users = await UserService.get()
    res.json({ users })
}

export const create = async(req, res) => {
    const user = req.body
    const userNew = await UserService.create(user)

    res.json({user: userNew})
}

export const addTicket = async(req, res) => {
    const {user: userID, ticket: ticketID} = req.query

    const result = await UserService.addTicket(userID, ticketID)
    res.json({result})
}

export const reminder = async(req, res) => {
    const { userID } = req.params
    const result = await UserService.reminder(userID)

    res.send(result)
}