import React from 'react'

const ItemDetail = ({productoFiltrado}) => {

    return (
        <>
        {productoFiltrado
        ?
            <div key={productoFiltrado.id} className="card col-4">
                <img src={productoFiltrado.pictureURL} className="card-img-top" alt="..."/>
                <div className="card-body d-flex row" id='contenedorCards' style={{alignContent:'end'}}>
                    <h4 className="card-title">{productoFiltrado.title}</h4>
                    <h5 className="fw-light card-title">-Memoria interna {productoFiltrado.internalMemory} GB</h5>
                    <h5 className="fw-light card-title">-Memoria ram {productoFiltrado.ramMemory} GB</h5>
                    <h5 className="fw-light card-title">-Cámara trasera: {productoFiltrado.cameras.back} </h5>
                    <h5 className="fw-light card-title">-Cámara delantera: {productoFiltrado.cameras.front} </h5>
                    <h5 className="fw-light card-title">-Disponible en colores: {productoFiltrado.availableColors} </h5>
                    <h5 className="fw-light card-title">${productoFiltrado.price}</h5>
                    <button className="fw-light btn btn-primary">Agregar al carrito</button>
                </div> 
            </div>
        :
        <h3>Cargando...</h3>
        }
        </>
    )
}

export default ItemDetail