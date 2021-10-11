import React from 'react'

const ItemDetail = ({walterWhite}) => {
    return (
        <div className="card col-4">
            <img src={walterWhite.img} className="card-img-top" alt="..."/>
            <div className="card-body d-flex row" id='contenedorCards' style={{alignContent:'end'}}>
                <h5 className="card-title">{walterWhite.name} '{walterWhite.nickname}'</h5>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div> 
        </div>
    )
}

export default ItemDetail
