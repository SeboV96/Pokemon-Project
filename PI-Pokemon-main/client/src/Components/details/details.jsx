import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/actions';
import random from '../../resources/random.png'
import loading from '../../resources/loading.gif'
import style from './Detail.module.css'
import shield from '../../resources/cards/shield.png'
import weight from "../../resources/cards/weight.svg"
import sword from '../../resources/cards/sword.png'
import speed from '../../resources/cards/run.png'

export default function Detail (props){
    
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])

    const myPokemon = useSelector( state => state.detail)

    const [section, setSection] = useState(1);

    useEffect( () => {
        if(myPokemon[0] && myPokemon[0].createdInDb){
            setSection(2)
        }
    }, [myPokemon, setSection]);


    function handleSection(e){
        if(e.target.innerHTML === 'About' && !myPokemon[0].createdInDb){
            setSection(1); 
        } else if(e.target.innerHTML === 'Base Stats'){
            setSection(2)
        } else if(e.target.innerHTML === 'Evolution' && !myPokemon[0].createdInDb){
            setSection(3)
        }
    }


    return(
        <div>
            {
                myPokemon.length && myPokemon[0].id == props.match.params.id ? 
                <div className={style.grid} style={{maxHeight:'100vh'}}> 
                    <Link to='/home' className={style.home}><button className={style.homebtn}>Back</button></Link>
                
                    {/* caratula (name, img, id, types) */}
                
                    <div className={style.visual}>
                        <div className={style.encabezado}> 
                            <h1 className={style.name}>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1> 
                            <p className={style.idd}>Pokedex N° {myPokemon[0].id}</p>
                        </div>
                        {
                            <img src={myPokemon[0].img ? myPokemon[0].img : random} className={style.img}/>
                        }
                        
                        <div className={style.types}>
                            {
                                myPokemon[0].types ? myPokemon[0].types.map( el => {
                                    return(
                                        <img src={`../../images/types/${el}.png`} alt="Types" height="160px" key={el}/>
                                    )
                                }
                                ) :
                                <span>Types not found</span>
                            }
                        </div>
                    </div>
                        <h1 className={style.details}>Details</h1>
                        <h2 className={style.statss}>Stats</h2>
                        <div className={style.stats}>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><i className="fas fa-heartbeat"></i> Hp</span>
                            </div>
                            <div className={style.progress} ><span style={{width:myPokemon[0].hp > 100 ? '100%' : myPokemon[0].hp +'%'}} per={`${myPokemon[0].hp}`} className={style.hp}></span></div>  
                        </div>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><img src={sword} alt='Attack' height='16px' width='16px'/> Attack</span>
                            </div>
                            <div className={style.progress} style={{animationDelay:'0.1s'}}><span style={{width:myPokemon[0].attack > 100 ? '100%' : myPokemon[0].attack +'%'}} per={`${myPokemon[0].attack}`} className={style.attack}></span></div>  
                        </div>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><i className="fas fa-shield-alt"></i> Defense</span>
                            </div>
                            <div className={style.progress} style={{animationDelay:'0.2s'}}><span style={{width:myPokemon[0].defense > 100 ? '100%' : myPokemon[0].defense+'%'}} per={`${myPokemon[0].defense}`} className={style.defense}></span></div>  
                        </div>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><img src={speed} alt='Speed' height='16px' width='16px'/> Speed</span>
                            </div>
                            <div className={style.progress} style={{animationDelay:'0.3s'}}><span style={{width:myPokemon[0].speed > 100 ? '100%' : myPokemon[0].speed +'%'}} per={`${myPokemon[0].speed}`} className={style.speed}></span></div>
                        </div>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><img src={'../../images/cards/weight.svg'} alt='Weight' height='16px' width='16px'/> Weight(Kg)</span>
                            </div>
                            <div className={style.progress} style={{animationDelay:'0.5s'}}><span style={{width:myPokemon[0].weight > 100 ? '100%' : myPokemon[0].weight +'%'}} per={`${(myPokemon[0].weight)/10}`} className={style.weight}></span></div>
                        </div>
                        <div className={style.bar}>
                            <div className={style.info}>
                                <span><img src={'../../images/cards/height.svg'} alt='Height' height='16px' width='16px'/> Height(M)</span>
                            </div>
                            <div className={style.progress} style={{animationDelay:'0.6s'}}><span style={{width:myPokemon[0].height > 100 ? '100%' : myPokemon[0].height +'%'}} per={`${(myPokemon[0].height)/10}`} className={style.height}></span></div>
                        </div>
                        
                    </div>
                </div> :
                <div className={style.loading}> 
                    <img src={loading} alt="Loading.." width='250px'/>
                    <p className={style.loadingtext}>Loading...</p>
                </div>
            }
        </div>
        
    )
}