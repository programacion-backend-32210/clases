import mongoose from "mongoose";
import chai from "chai";
import PizzaService from "../../src/services/pizza.service.js";

mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'db_32210_clase44_test' })
const service = new PizzaService()
const expect = chai.expect

describe('Test CRUD of Pizza Service', () => {

    before(async function() {
        await mongoose.connection.db.dropCollection('pizzas', () => {
            console.log('collection dropped')
        })

        this.timeout(200)
    })

    it('Must return all pizzas', async () => {
        const result = await service.get()
        expect(result).to.be.deep.equal([])
    })

    it('Must be create a pizza', async () => {
        const result = await service.create({
            name: 'Fugazzeta',
            size: 'Medium',
            price: 100
        })

        expect(result).to.have.property('_id')
    })


})