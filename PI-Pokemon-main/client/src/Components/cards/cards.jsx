import React from 'react'
import { Link } from 'react-router-dom'
import './cardsCss.css'


export default function Card({name, img, types, attack, id, hp}){
    // const colors = {
    //     fire: '#FDDFDF',
    //     grass: '#DEFDE0',
    //     electric: '#FCF7DE',
    //     water:'#DEF3FD',
    //     ground:'#f4e7da',
    //     rock:'#d5d5d4',
    //     fairy:'#fceaff',
    //     poison:'#98d7a5',
    //     bug:'#f8d5a3',
    //     dragon:'#97b3e6',
    //     psychic: '#eaeda1',
    //     flying:'#F5F5F5',
    //     fighting: '#E6E0D4',
    //     normal:'#F5F5F5'
    // }
    // Card.style.backgroundColor = colors
    return (
        <div className='CardContainer'>
           <div className='pokemon-card'>
           <div className='background'>
                <img className='img' src={img} alt='prueba' width = '200px' height='230px'/>
            </div>
           <div className='CardContentContainer'>
             <h1 className='PokeName' ><Link to = {`/pokemons/${id}`}>{name}</Link></h1>
            <span className='PokeTypes'>{types}</span>
            <div className='pokemon-stats'>
                <p>Attack Power: {attack}</p>
            </div>
            
            </div>
           </div>
        </div>
    )
}