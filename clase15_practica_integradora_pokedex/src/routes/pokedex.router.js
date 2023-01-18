import { Router } from 'express'
import pokeModel from '../models/pokemon.models.js'

const router = Router()

// Listar pokemons
router.get('/', async (req, res) => {
    const pokemons = await pokeModel.find().lean().exec()
    
    res.render('list', { pokemons })
})

// Pagina para crear pokemons
router.get('/create', (req, res) => {
    res.render('create', {})
})



// Obtener un pokemon
router.get('/:name', async (req, res) => {
    const name = req.params.name

    const pokemon = await pokeModel.findOne({name: name}).lean().exec()
    
    res.render('one', { pokemon })
})


// Crear pokemons
router.post('/', async (req, res) => {
    const pokemonNew = req.body
    console.log(pokemonNew);

    const pokemonGenerated = new pokeModel(pokemonNew)
    await pokemonGenerated.save()

    console.log(pokemonGenerated);

    res.redirect('/pokedex/' + pokemonGenerated.name)
})

// BOrrar un pokemon
router.get('/delete/:name', (req, res) => {
    res.send('Borrando pokemon')
})

export default router

