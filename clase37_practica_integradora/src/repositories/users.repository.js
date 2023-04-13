import UserDTO from '../DTO/users.dto.js'
import { TicketService } from './index.js'
import Mail from '../modules/mail.js'

export default class UserRepository {
    constructor(dao) {
        this.dao = dao
        this.mail = new Mail()
    }

    get = async () => {
        return await this.dao.get()
    }

    create = async (data) => {
        const dataToInsert = new UserDTO(data)
        return await this.dao.create(dataToInsert)
    }

    getByID = async (id) => {
        return await this.dao.getByID(id)
    }

    addTicket = async (userID, ticketID) => {
        const user = await this.dao.getByID(userID)
        user.tickets.push(ticketID)

        return this.dao.update(userID, user)
    }

    reminder = async (userID) => {
        const user = await this.dao.getByID(userID)
        let html = `<h1>Tickets: </h1>`

        for (let i = 0; i < user.tickets.length; i++) {
            const ticketID = user.tickets[i]
            const ticket = await TicketService.getByID(ticketID)

            html = html.concat(`<h2>${ticket.name}</h2><p>${ticket.description}</p>`)
        }

        const result = this.mail.send(user, "REminder Tickets", html)

        return result
    }
}