import React from 'react'
import Loader from 'react-loader-spinner';
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({allCellph}) => {

    return (
        <>
        {
            allCellph.length
            ?
            <div id='cardsInicio'>
            {allCellph.map(cadaCelular =>
                <div key={cadaCelular.id} className="card" style={{width:'18em'}}>
                    <img src={cadaCelular.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column justify-content-end">
                        <h5 className="card-title">{cadaCelular.title}</h5>
                        <p className="card-text">${cadaCelular.price}</p>
                        <Link to={`/item/${cadaCelular.titleLink}`}><button className="btn btn-primary">Ver detalles</button></Link>
                    </div>
                </div>)}
            </div>
            :
            <div id='loaderContainer' >
                <Loader type={'Puff'} color={'aqua'} />
                <h3 id='cargandoProductos' >Cargando productos...</h3>
            </div>
        }
        </>
    )
}

export default ItemList