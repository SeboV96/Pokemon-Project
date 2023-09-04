import React from "react";
import './footerCss.css'
import {FiLinkedin, FiGithub} from 'react-icons/fi'


export default function Footer () {

    return(
       <section className="footer-section">
        
       <a href='https://github.com/SeboV96' target="_blank"><FiGithub/></a>
       <a href='https://www.linkedin.com/in/sebastian-villa-b8770b244/' target="_blank"><FiLinkedin/></a>

       </section>
    )
}
