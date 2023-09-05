import React from 'react' ;
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import style from './Navbar.module.css'

export default function Navbar(){
    return (
        <nav className={style.nav}>
            
            <Link to="/"><button className={style.poke}><img id="logoPoke" src={"Pokemon-Project/PI-Pokemon-main/client/src/resources/landing.gif"} width="90" alt="landing" /></button></Link>
            
            <Link to="/pokemons"><button className={style.create}>New Pokemon +</button></Link>
            
            <SearchBar />
        </nav>
    );
}