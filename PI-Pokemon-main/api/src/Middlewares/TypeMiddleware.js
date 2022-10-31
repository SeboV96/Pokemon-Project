const { Type } = require('../db')
const axios = require('axios')

//                             Búsqueda por Types

const findPokeTypes = async () => {
    let findPokeTypes = await Type.findAll()

    if (findPokeTypes.length === 0) {
        let apiCall = await axios.get('https://pokeapi.co/api/v2/type')

        let apiType = apiCall.data.results.map(p => {return {name: p.name}})

        findPokeTypes = await Type.bulkCreate(apiType)
    }
    return findPokeTypes
}





module.exports = {
    findPokeTypes
}