import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainter = ({nombreDelSitio}) => {
    //stock y productos a comprar
    const [stock , setStock] = useState(10);
    const [initial, setInitial] = useState(1);


    return (
        <div>
            <h1 id='bienvenido'>Bienvenid@ a {nombreDelSitio} <FontAwesomeIcon icon={faFlask} color='greenyellow'/></h1>
            {/* <ItemCount stock={stock} setStock={setStock} initial={initial} setInitial={setInitial}/> */}
            {/* <ItemList/> */}
        </div>
    )
}

export default ItemListContainter