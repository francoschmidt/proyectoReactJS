import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'
import AllItemDetails from '../AllItemDetails/AllItemDetails'

const ItemDetailContainer = () => {
    
    //aca guardo el array de todos los personajes
    let [personajes, setPersonajes] = useState([])
    //aca guardo el array con los datos de WW
    let [walterWhite, setWalterWhite] = useState([])


    //obtengo los datos de la api y mando los datos de WW al array
    const getPersonajes = async () => {
        try {
            const respuesta = await axios.get('https://www.breakingbadapi.com/api/characters')
            setPersonajes(personajes = respuesta.data)
            setWalterWhite(walterWhite = personajes[0])
        } catch (error) {
            console.log(error)
        }
    }

    //ejecuto la funcion para obtener datos api
    useEffect(() => {
        getPersonajes();
    }, [])

    return (
        <div>
            <ItemDetail walterWhite={walterWhite} />
            <AllItemDetails personajes={personajes} />
        </div>
    )
}

export default ItemDetailContainer
