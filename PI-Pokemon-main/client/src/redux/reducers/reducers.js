const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    details: [],

}

export default function rootReducer(state = initialState, action){
    switch (action.type){
        
        case 'GET_POKEMONS':
            
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'SEARCH_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload
            }
        case 'GET_TYPE':
            return {
                ...state,
                types: action.payload
            }
        case 'EVENT_DETAIL':
            return {
                ...state,
                details: action.payload
            }
        case 'FILTER_BY_TYPE':
            let allPokemons = state.pokemons
            let filterType = action.payload ? allPokemons.filter(poke => poke.types.includes(action.payload)) : allPokemons
                action.payload === "All" ? state.allPokemons = state.pokemons
                    : state.allPokemons = state.pokemons.filter(poke => poke.types.includes(action.payload))
                if (filterType.length < 1) {alert('Type not found'); return {...state, allPokemons: allPokemons}}
                return {
                    ...state,
                    allPokemons: state.allPokemons

                }
            

            case 'FILTER_BY_API_OR_DB':    
            if (action.payload === "Api") state.allPokemons = state.pokemons.filter(poke => typeof poke.id === "number")
            if (action.payload === "Db") state.allPokemons = state.pokemons.filter(poke => typeof poke.id === 'string')
            if (action.payload === "All") state.allPokemons = state.pokemons
            return {
                ...state, 
                allPokemons: state.allPokemons,
            }
        
            case 'FILTER_BY_ASC_OR_DESC':
                 
                    const sortAZ = action.payload === "Asc" ? state.allPokemons.sort(function(a, b) {
                    if(a.name > b.name){
                        return 0
                    }
                    if(b.name > a.name) {
                        return -1
                    }
                    return 0
                }) :
                state.allPokemons.sort(function(a, b) {
                    if(a.name > b.name){
                        return -1
                    }
                    if(b.name > a.name) {
                        return 1
                    }
                    return 0
                })  

                return {
                    ...state,
                    allPokemons: sortAZ,
                }
            case 'FILTER_BY_ATTACK':
                action.payload === "Less" ? state.allPokemons.sort(function(a, b) {
                    if(a.attack > b.attack){
                        return 1
                    }
                    if(b.attack > a.attack) {
                        return -1
                    }
                    return 0
                }) :
                state.allPokemons.sort(function(a, b) {
                    if(a.attack > b.attack){
                        return -1
                    }
                    if(b.attack > a.attack) {
                        return 1
                    }
                    return 0
                })

                return {
                    ...state,
                    allPokemons: state.allPokemons,
                }
               
            case 'CREATE_POKEMON':
                return {
                    ...state,
                }
            case 'CLEAR_STATE':
                return {
                    ...state,
                    details: {},
                }
            
            default:
                return state 
    }
    

}