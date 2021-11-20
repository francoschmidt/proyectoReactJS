import React from 'react'
import Loader from 'react-loader-spinner';
//importo el array de celulares con sus datos
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({allCellph}) => {

    return (
        <>
        {
            allCellph.length
            ?
            
            <div id='cacho' style={{display:'flex', marginBottom:'2%'}}>
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
            <div id='loaderContainer' style={{display:'flex', flexDirection:'column'}} >
                <Loader type={'Puff'} color={'aqua'} />
                <h3 style={{fontFamily:'serif'}} >Cargando productos...</h3>
            </div>
        }
        </>
    )
}

export default ItemList