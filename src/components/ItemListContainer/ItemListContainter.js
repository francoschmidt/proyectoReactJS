import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Loader from "react-loader-spinner";

const ItemListContainter = ({nombreDelSitio}) => {
    const [stock , setStock] = useState(10);
    const [initial, setInitial] = useState(1);

    let [loader, setLoader] = useState(true)
    setTimeout(() => {
        setLoader(loader=false)
    }, 2000);

    return (
        <div>
            <h1 id='bienvenido'>Bienvenid@ a {nombreDelSitio} <FontAwesomeIcon icon={faFireAlt} color='aqua'/></h1>
            {/* <ItemCount stock={stock} setStock={setStock} initial={initial} setInitial={setInitial}/> */}
            {loader
            ?
            <div id='loaderContainer'>
                <Loader color='aqua' type='Oval'/>
            </div>
            :
            <ItemList/>
            }
            
        </div>
    )
}

export default ItemListContainter