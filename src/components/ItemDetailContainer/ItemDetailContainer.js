import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({allCellph}) => {
    
    //recibo el id por parametro proveniente de la url
    let {id} = useParams()

    let productoFiltrado;
    //si el array de los celulares ya cargó los productos, filtro el producto que tenga el mismo id 
    if(allCellph.length){
        productoFiltrado = allCellph.find(producto => producto.titleLink === id)
    }

    return (
        <div id='itemDetail'>
            {/* si no hay producto filtrado muestro cargando producto. Si hay producto filtrado muestro el itemDetail*/}
            {!productoFiltrado
            ?
            <div id='containerLoader' style={{display:'flex', flexDirection:'column'}} >
                <Loader type={'Puff'} color={'aqua'} />
                <h3 style={{fontFamily:'serif'}} >Cargando producto...</h3>
            </div>
            :
            <ItemDetail productoFiltrado={productoFiltrado} />
            }
        </div>
    )
}

export default ItemDetailContainer