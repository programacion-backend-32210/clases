import { Router } from 'express'

const router = Router()

// Listar pokemons
router.get('/', (req, res) => {
    res.render('list', {})
})

// Obtener un pokemon
router.get('/:name', (req, res) => {
    const name = req.params.name

    res.render('one', {
        name
    })
})

// Crear pokemons
router.post('/', (req, res) => {
    res.send('Creando pokemon')
})

// BOrrar un pokemon
router.delete('/:id', (req, res) => {
    res.send('Borrando pokemon')
})

export default router

