import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { eventDetail, ClearState } from '../../redux/actions/actions'
import { Link, useParams } from 'react-router-dom'
import Loading from '../loading/loading'

import './detailsCss.css'

export default function Details(){
    
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(ClearState())
        dispatch(eventDetail(id))
    },[dispatch, id])
    

    const detailState = useSelector((state) => state.details)
    console.log(detailState)
    return (
        <div className='DetailContainer'>
    
            
               
            {
                Object.keys(detailState).length ?
            
            
            <div className='CardDetail'>
             <div className='background'>
             <img className='DetailImg' src = {detailState.img} alt='prueba' width = '200px' height='230px'/>
             </div>
             <div className='DetailContentContainer'>
             <h1 className='detail-Pokename'>{detailState.name[0].toUpperCase() + detailState.name.substring(1)}</h1>
             <span className='detail-Poketipes'>{detailState.types.map(poke => poke[0].toUpperCase() + poke.slice(1)+ ' ')}</span>
             <span className='detail-id'>#{detailState.id}</span>
             <div className='detail-stats'>
                <p>HP: {detailState.hp}</p>
                <p>Attack: {detailState.attack}</p>
                <p>Defense: {detailState.defense}</p>
                <p>Speed: {detailState.speed}</p>
                <p>Height: {detailState.height}</p>
                <p>Weight: {detailState.weight}</p>
             </div>
             </div>
               
                </div>
            :<div><Loading/></div>
          
              
                }
                <Link to ='/home'> <button className='Back'>Go Back</button></Link>
                
        
    </div>)
}