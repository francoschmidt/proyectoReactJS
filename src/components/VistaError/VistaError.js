import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import imgDecepcion from '../../images/decepcion.jpg'
import './VistaError.css'

const VistaError = () => {
    return (
        <div id='divContenedor'>
            <h1 id='titulo'>ERROR 4<FontAwesomeIcon icon={faBan} color='red' className='textos'/>4</h1>
            <h2 className='textos font-monospace'>Página no encontrada</h2>
            <h2 className='textos font-monospace'>La página que ud. está buscando no está disponible</h2>
            <Link to='/'><button type="button" className="btn btn-primary fs-5 px-4 textos" id='botonVolver'>Volver al menú principal</button></Link>
            <img className='mt-4' id='imgDecepcion' alt='' src={imgDecepcion}/>
        </div>
    )
}

export default VistaError
