import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ItemListContainter = ({allCellph, setAllCellph}) => {

    //recibo id como parametro para mostrar los productos que pide el usuario mediante el link
    let {id} = useParams()

    //aca guardo los productos que se filtran en el siguiente condicional
    let productoFilterMismoId = []
    
    //aca filtro los productos que coincidan la marca con la marca que ingresa el usuario mediante la url
    if(allCellph.length){
        productoFilterMismoId=allCellph.filter(e => e.mark === id)
    }

    //cuando se agreguen los productos al array (dsp de 2 seg) muestro los filtrados, sino muestro el item list completo
    return (
        <>
        {productoFilterMismoId.length
        ?
            <div className='d-flex justify-content-center'> 
            {productoFilterMismoId.map(cadaCelu =>
                <div key={cadaCelu.id} className="card m-3" style={{width:'18em'}}>
                    <img src={cadaCelu.imgURL} alt="..."/>
                    <div className="card-body d-flex flex-column justify-content-end">
                        <h5 className="card-title">{cadaCelu.title}</h5>
                        <p className="card-text">${cadaCelu.price}</p>
                        <Link to={`/item/${cadaCelu.titleLink}`}><button className="btn btn-primary">Ver detalles</button></Link>
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