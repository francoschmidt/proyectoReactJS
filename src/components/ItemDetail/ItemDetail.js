import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';

const ItemDetail = ({productoFiltrado}) => {
    
    //numeero que figura en el item detail
    const [initial, setInitial] = useState(1);

    //creo estado para setear cantidad de productos que va a comprar el usuario
    let [compra, setCompra] = useState()

    return (
        <div key={productoFiltrado.id} className="card col-4">
            <img src={productoFiltrado.pictureURL} className="card-img-top" alt="..."/>
            <div className="card-body d-flex row" id='contenedorCards' style={{alignContent:'end'}}>
                <h4 className="card-title">{productoFiltrado.title}</h4>
                <h5 className="fw-light card-title">•Memoria interna {productoFiltrado.internalMemory} GB</h5>
                <h5 className="fw-light card-title">•Memoria ram {productoFiltrado.ramMemory} GB</h5>
                <h5 className="fw-light card-title">•Cámara trasera: {productoFiltrado.cameras.back} </h5>
                <h5 className="fw-light card-title">•Cámara delantera: {productoFiltrado.cameras.front} </h5>
                <h5 className="fw-light card-title">•Disponible en colores: {productoFiltrado.availableColors} </h5>
                <h5 className="fw-light card-title">${productoFiltrado.price}</h5>
                <ItemCount 
                    initial={initial} 
                    setInitial={setInitial} 
                    productoFiltrado={productoFiltrado}
                    compra={compra}
                    setCompra={setCompra} />
            </div> 
        </div>
    )
}

export default ItemDetail