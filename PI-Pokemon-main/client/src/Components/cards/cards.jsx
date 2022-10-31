import React from 'react'
import { Link } from 'react-router-dom'
import './cardsCss.css'


export default function Card({name, img, types, attack, id, hp}){
    return (
        <div className='Card'>
            <h2 className='name' ><Link to = {`/pokemons/${id}`}>{name}</Link></h2>
            <h4 className='types'>{types}</h4>
            <img className='img' src={img} alt='prueba' width = '200px' height='230px'/>
            <h5><span>Attack Power: </span> <span className='attack'>{attack}</span></h5>
            <h6 hidden>{hp}</h6>
        </div>
    )
}