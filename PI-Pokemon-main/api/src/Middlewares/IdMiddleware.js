const { Pokemon, Type } = require('../db')
const axios = require('axios')
const { getPokeNameApi } = require('../Middlewares/AllpokeMiddleware')
//                                         Búsqueda por ID


const pokeId = async (value) => {
    if(value.length > 5) {
        try {
            const dbFindId = await Pokemon.findByPk(value, {include: Type})
            const pokeDetailsInDb = {
                id: dbFindId.id,
                name: dbFindId.name,
                height:dbFindId.height,
                hp:dbFindId.hp,
                attack:dbFindId.attack,
                defense:dbFindId.defense,
                speed: dbFindId.speed,
                weight: dbFindId.weight,
                types: dbFindId.types.map(m=>m.name),
                img: dbFindId.img,               
                createdInDb:dbFindId.createdInDb
            } 
            console.log(dbFindId)
            return pokeDetailsInDb
        } catch (err) {
            throw new Error (`Pokemon not found or doesn't exist`)
        }
    } else {
        return getPokeNameApi(value)
    }
}

const findPokeInApi = async (name) => {
    let apiCall = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`)
    .catch(() => false)
    if (apiCall) return true
}

const createPoke = async (name, height, hp, attack, defense, speed, weight, types, img, createdInDB) => {
    if (name){
        let findDb = await Pokemon.findOne({
            where: {name: name.toLowerCase().trim()}
        })
        if (await findPokeInApi(name)) throw new Error('This pokemon already exists!')
        else if(findDb) throw new Error('This pokemon already exists!')
        else {
            let pokeCreate= await Pokemon.create({
                name: name.toLowerCase().trim(),
                height: height,
                hp: hp,
                attack: attack,
                defense: defense,
                speed: speed,
                weight: weight,
                img: img,
                createdInDB: createdInDB
            })

            let typesDb = await Type.findAll({
                where: {name: types}
            })

            pokeCreate.addType(typesDb)
            console.log('Pokemon created!')
            return 'Pokemon created!'
        }
    } else {
        return 'Please enter a name'
    }
}

module.exports = {
    pokeId,
    createPoke
}