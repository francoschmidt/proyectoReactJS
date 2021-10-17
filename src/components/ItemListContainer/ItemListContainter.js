import React, { useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
// import Loader from "react-loader-spinner";
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router'

const ItemListContainter = ({allCellph, setAllCellph}) => {
    //stock y productos a comprar
    const [stock , setStock] = useState(10);
    const [initial, setInitial] = useState(1);

    //recibo id como parametro para mostrar los productos que pide el usuario mediante el link
    let {id} = useParams()

    //aca guardo los productos que se filtran en el siguiente condicional
    let productoFilterMismoId = []
    
    //aca filtro los productos que coincidan la marca con la marca que ingresa el usuario mediante la url
    if(allCellph.length){
        productoFilterMismoId=allCellph.filter(e => e.mark === id)
    }

    //cuando se agreguen los productos al array (dsp de 2 seg) muestro los filtrados, sino muestro el item list que dentro declara el loader en caso de que no haya productos en el array
    return (
        <>
        {productoFilterMismoId.length
        ?
        <div className='d-flex justify-content-center'> 
        {productoFilterMismoId.map(cadaCelu =>
            <div key={cadaCelu.id} className="card m-3" style={{width:'18em'}}>
                <img src={cadaCelu.pictureURL} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">{cadaCelu.title}</h5>
                    <p className="card-text">${cadaCelu.price}</p>
                    <button className="btn btn-primary">Ver detalles</button>
                </div>
            </div>
            )}
        </div>
        :
        <ItemList allCellph={allCellph} setAllCellph={setAllCellph} />}
        </>
    )
}

export default ItemListContainter