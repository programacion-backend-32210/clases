export default class TicketDTO {
    constructor(ticket) {
        this.id = this.id || this._id || null
        this.name = ticket.name || ""
        this.description = ticket.description || ""
    }
}