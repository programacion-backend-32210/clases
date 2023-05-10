import mongoose from "mongoose";

const PizzaModel = mongoose.model('Pizzas', new mongoose.Schema({
    name: String,
    size: String,
    price: Number
}))

export default PizzaModel