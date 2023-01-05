import { Router } from 'express'
import PokeFile from '../manager/pokefile.js'
import __dirname from '../utils.js'

const router = Router()
const pokefile = new PokeFile(__dirname + '/db/db.json')

router.get('/pokedex', async (req, res) => {
    try {
        const pokemons = await pokefile.getAll()

        res.render('index', {
            pokemons
        })
    } catch (error) {
        console.log(error);
        res.send('error')
    }
})

router.get('/', async (req, res) => {
    try {
        const pokemons = await pokefile.getAll()

        res.json(pokemons)
    } catch (error) {
        console.log(error);
        res.send('error')
    }
})



export default router