//                                 -MiddleWares-
const { Pokemon, Type } = require('../db')
const axios = require('axios')

//                                 Búsqueda de Pokes

 
const getPokeNameApi = async (value) => {
    try {
        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase().trim()}`)
        const pokevalues = {
            id: api.data.id,
            name: api.data.name,
            height: api.data.height,
            hp: api.data.stats[0].base_stat,
            attack: api.data.stats[1].base_stat,
            defense: api.data.stats[2].base_stat,
            speed: api.data.stats[5].base_stat,
            weight: api.data.weight,
            types: api.data.types.map(p=>p.type.name),
            img: api.data.sprites.versions["generation-v"]["black-white"].animated.front_default || api.data.sprites.front_default
        }
        return pokevalues
    } catch (err) {
        throw new Error('Pokemon not found')
    }
}

const getPokeNameDb = async (name) => {
    let findNameInDb = await Pokemon.findAll({
        where: {
            name: name.toLowerCase().trim()
        },
        attributes: ["id",
         "name",
         "height",
          "hp",
           "attack",
            "defense",
             "speed",
               "weight",
                   "img",],
               include: {
                model: Type,
                attributes: ['name'],
                through:{
                    attributes: [],
                },
               }
    })


    findNameInDb = findNameInDb.map(p => {
        return {
            ...p.dataValues,
            types:p.types?.map(pt => pt.name)
        }
    })

    if(!findNameInDb[0]) return getPokeNameApi(name)
    
    return findNameInDb[0]
}


const getAllPokes = async () => {
    const callOne = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`)
    const pokeCallsOne = await callOne.data.results.map(p => axios.get(p.url))

    const totalPokes = [...pokeCallsOne]

    const resPromises = await Promise.all(totalPokes)

    const pokeData = resPromises.map(pt => {
        return {
            id: pt.data.id,
            name: pt.data.name,
            img: pt.data.sprites.versions["generation-v"]["black-white"].animated.front_default  || api.data.sprites.front_default,
            attack: pt.data.stats[1].base_stat,
            types: pt.data.types.map(p => p.type.name)
        }
    })

    const dbCall = await Pokemon.findAll({
        attributes: ['id','name', 'img', 'cratedInDb', 'attack'],
        include:{
            model: Type,
            attributes:['name'],
            through:{
                attributes: [],
            },
        }
    })

     const dbCallMap = dbCall.map(p => {
        return {
            ...p.dataValues,
            types: p.types?.map(pt => pt.name)
        }
    })

    let totalCall = [...dbCallMap, ...pokeData]

    return totalCall
}

module.exports = {
    getPokeNameDb,
    getAllPokes,
    getPokeNameApi
}