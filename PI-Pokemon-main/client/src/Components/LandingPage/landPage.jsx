import React from 'react';
import { Link  } from 'react-router-dom';
import './LandPageCss.css'

export default function landingPage (){
    return (
        <div className='pikapika'>
            <h1 className='title'>Poke APP</h1>
            <div className='posi'>
            <Link to ='/home'><button className='button'>Catch them all!</button></Link>
            </div>
        </div>
    )
}