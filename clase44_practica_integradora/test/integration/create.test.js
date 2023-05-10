import chai from "chai";
import supertest from "supertest";

const expect = chai.expect
const requester = supertest('http://127.0.0.1:8080')

describe('Pizzas', () => {
    describe('Create Piiza', () => {

        it('The endpoint POST /api/pizza must to create a piiza', async () => {

            const pizza = {
                name: 'Fugazzeta',
                size: 'Medium',
                price: 100
            }
            const response = await requester.post('/api/pizza').send(pizza)
            const { status, ok, _body } = response

            expect(_body).to.have.property('_id')


        })

    })
})

