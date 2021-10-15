import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner';
//importo el array de celulares con sus datos
import { celulares } from '../helpers/arrayCelulares'
import './ItemList.css'

const ItemList = ({celular, setCelular}) => {

    //cuando carga el dom hago una promesa que guarda el array de 'celulares' en 'celular' en 2s.
    useEffect(() => {
        setTimeout(() => {
            let promesaCelulares = new Promise((response)=>{
                    response(setCelular(celular = celulares))
                })
                promesaCelulares
                    .then(console.log('Funcionó. Ahora la variable celular contiene el array de celulares.'))
                    .catch((err)=>{console.log(err)})
                    .finally(console.log('Promesa finalizada'))
        }, 2000);
    }, [])

    const detalleCelular = () => {
        celular.map(cadaCelular =>
            <div className="card" style={{width:'18em'}}>
                <img src={cadaCelular.pictureURL} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">{cadaCelular.title}</h5>
                    <p className="card-text">${cadaCelular.price}</p>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>)
    }

    //creo dinamicamente y muestro los celulares al traer la resp de la promesa dsp de 2s.
    return (
        <>
        {
            celular.length > 0
            ?
            <div id='cacho' style={{display:'flex', marginBottom:'2%'}}>
            {celular.map(cadaCelular =>
                <div key={cadaCelular.id} className="card" style={{width:'18em'}}>
                    <img src={cadaCelular.pictureURL} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column justify-content-end">
                        <h5 className="card-title">{cadaCelular.title}</h5>
                        <p className="card-text">${cadaCelular.price}</p>
                        <button onClick={()=>detalleCelular} className="btn btn-primary">Ver detalles</button>
                    </div>
                </div>)}
            </div>
            :
            <div id='loaderContainer'>
                <Loader type={'Puff'} color={'aqua'} />
            </div>
        }
        </>
    )
}

export default ItemList