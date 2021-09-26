import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const ItemListContainter = ({nombreDelSitio}) => {


    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'2%'}}>Bienvenid@ a {nombreDelSitio} <FontAwesomeIcon icon={faFireAlt} color='aqua'/></h1>
        </div>
    )
}

export default ItemListContainter
