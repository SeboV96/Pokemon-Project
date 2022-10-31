const { Router, json } = require('express');
const { Pokemon, Type } = require('../db')
const axios = require('axios')
const { getPokeNameDb, getAllPokes, getPokeNameApi } = require('../Middlewares/AllpokeMiddleware')
const {  pokeId, createPoke } = require('../Middlewares/IdMiddleware')
const { findPokeTypes } = require('../Middlewares/TypeMiddleware')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(json())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req,res) => {
    try {
        let {name} = req.query
        if(!name) return res.status(200).json(await getAllPokes())
        res.status(200).json(await getPokeNameDb(name))
    } catch (err) {
        res.status(400).json(err.message)
    }
})


router.get('/pokemons/:id', async (req, res) => {
    try {
        let { id } = req.params
        res.status(200).send(await pokeId(id))
    } catch (err) {
        res.status(404).json(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        let {name, height, weight, hp, attack, defense, speed, types, img, createdInDb } = req.body
        res.status(200).json(await createPoke(name, height, weight, hp, attack, defense, speed, types, img, createdInDb ))
    } catch (err) {
        res.status(400).json(err.message)
    }
})

router.get('/types', async (req, res) => {
    try {
        
        res.status(200).json(await findPokeTypes())
    } catch (err) {
        res.status(404).send({error: 'Something is wrong! :('})
    }
})

router.get('/pokemons?name=', async (req, res) => {
    try {
        let { name } = req.query
        if(name) return res.status(200).json( await getPokeNameApi(name))
        else return res.status(200).json(await getPokeNameDb(name))
    } catch (err) {
        res.status(404).send({error: 'PokeName not found!'})
    }
})

router.delete('/pokemons/:id', async (req, res) => {
    try {
        let { id } = req.params
        res.json(await Pokemon.destroy({
            where: {id}
        }))
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;
