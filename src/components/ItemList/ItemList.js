import React, {useEffect} from 'react'
import Loader from 'react-loader-spinner';
//importo el array de celulares con sus datos
import { celulares } from '../helpers/arrayCelulares'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({allCellph, setAllCellph}) => {

    //cuando carga el dom hago una promesa que guarda el array de 'celulares' en 'allCellph' dsp de 2s.
    useEffect(() => {
        setTimeout(() => {
            let promesaCelulares = new Promise((response)=>{
                    response(setAllCellph(allCellph = celulares))
                })
                promesaCelulares
                    .then(console.log('Funcionó. Ahora la variable allCellph contiene el array de celulares.'))
                    .catch((err)=>{console.log(err)})
                    .finally(console.log('Promesa finalizada'))
        }, 2000);
    }, [])


    return (
        <>
        {
            allCellph.length
            ?
            <div id='cacho' style={{display:'flex', marginBottom:'2%'}}>
            {allCellph.map(cadaCelular =>
                <div key={cadaCelular.id} className="card" style={{width:'18em'}}>
                    <img src={cadaCelular.pictureURL} className="card-img-top" alt="..."/>
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