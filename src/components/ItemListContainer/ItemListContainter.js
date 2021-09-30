import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import './ItemListContainer.css'

const ItemListContainter = ({nombreDelSitio}) => {

    const [stock , setStock] = useState(10);
    const [initial, setInitial] = useState(1);

    return (
        <div>
            <h1 id='bienvenido'>Bienvenid@ a {nombreDelSitio} <FontAwesomeIcon icon={faFireAlt} color='aqua'/></h1>
            <ItemCount stock={stock} setStock={setStock} initial={initial} setInitial={setInitial}/>
        </div>
    )
}

export default ItemListContainter
