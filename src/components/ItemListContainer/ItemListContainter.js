import React, { useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
// import Loader from "react-loader-spinner";
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainter = ({celular, setCelular}) => {
    //stock y productos a comprar
    const [stock , setStock] = useState(10);
    const [initial, setInitial] = useState(1);
    
    return (
        <div>
            <ItemList 
                celular={celular} 
                setCelular={setCelular} 
                ItemCount={<ItemCount stock={stock} setStock={setStock} initial={initial} setInitial={setInitial}/>} />
        </div>
    )
}

export default ItemListContainter