import React from 'react'

const ItemDetail = ({personajes, walterWhite}) => {
    return (
        //ESTO ES PARA CUANDO TENGA QUE RECORRER EL ARRAY Y MOSTRAR LAS CARDS EN LA VISTA

        // <div style={{display:'flex', flexFlow:'row', flexWrap:'wrap'}}>
        //     {personajes.map(cadaPersonaje =>          
        //     <div key={cadaPersonaje.char_id} className="card col-2">
        //         <img src={cadaPersonaje.img} className="card-img-top" alt="..."/>
        //         <div className="card-body d-flex row" id='contenedorCards' style={{alignContent:'end'}}>
        //             <h5 key={cadaPersonaje.name} className="card-title">{cadaPersonaje.name}</h5>
        //             <button className="btn btn-primary">Agregar al carrito</button>
        //         </div> 
        //     </div>)}
        // </div>
        

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
