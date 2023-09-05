import React from 'react' ;
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import style from './Navbar.module.css'


export default function Navbar(){
    return (
        <nav className={style.nav}>
            
            <Link to="/"><button className={style.poke}>Go Landing</button></Link>
            
            <Link to="/pokemons"><button className={style.create}>New Pokemon +</button></Link>
            
            <SearchBar />
        </nav>
    );
}