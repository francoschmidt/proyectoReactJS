import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import './ItemDetail.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ItemDetail = ({productoFiltrado}) => {
    
    //numeero que figura en el item detail
    const [initial, setInitial] = useState(1);

    //creo estado para setear cantidad de productos que va a comprar el usuario
    let [compra, setCompra] = useState()

    return (
        <>
            <div id='contenedorItemDetail'>
                <div key={productoFiltrado.id} className="card col-4">
                    <img src={productoFiltrado.pictureURL} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex row" id='contenedorCards' style={{alignContent:'end'}}>
                        <h4 className="card-title">{productoFiltrado.title}</h4>
                        <h5 className="fw-light card-title">•Memoria interna {productoFiltrado.internalMemory}</h5>
                        <h5 className="fw-light card-title">•Memoria ram {productoFiltrado.ramMemory}</h5>
                        <h5 className="fw-light card-title">•Cámara trasera: {productoFiltrado.cameras.back} </h5>
                        <h5 className="fw-light card-title">•Cámara delantera: {productoFiltrado.cameras.front} </h5>
                        <h5 className="fw-light card-title">•Disponible en colores: {productoFiltrado.availableColors} </h5>
                        <h5 className="text-center mt-1 fw-bold card-title">${productoFiltrado.price}</h5>
                        <ItemCount
                            initial={initial} 
                            setInitial={setInitial} 
                            productoFiltrado={productoFiltrado}
                            compra={compra}
                            setCompra={setCompra} />
                        <Link 
                            to='/cart'
                            id='contenedorIrAlCarrito' 
                            style={{display:'flex', justifyContent:'center'}}>
                            <button className='mt-3 btn btn-success' id='botonCarrito'>
                                <FontAwesomeIcon icon={faShoppingCart} color='white'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail