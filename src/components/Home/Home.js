import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const Home = ({nombreDelSitio}) => {
    
    return (
        <div id='homeContainer'>
            <h1 id='bienvenido'>Bienvenid@ a {nombreDelSitio} <FontAwesomeIcon icon={faFireAlt} color='aqua'/></h1>
            <h3 className='mt-4' style={{fontFamily:'cursive'}}>¿De qué se trata nuestro e-commerce?</h3>
            <p className='fs-5' style={{fontFamily:'cursive'}}>Vendemos celulares nuevos de todas las marcas y precios. Somos importadores directos y vendemos al mejor precio de mercado.</p>
        </div>
    )
}

export default Home