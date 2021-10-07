import React, {useState, useEffect} from 'react'

import SamsungGalaxyS20 from '../../images/Samsung Galaxy S20.jpg'
import SamsungGalaxyS10 from '../../images/Samsung Galaxy S10.jpg'
import HuaweiP30Pro from '../../images/Huawei P30 Pro.jpg'
import HuaweiP40Pro from '../../images/Huawei P40 Pro.jpg'
import MotoG9Plus from '../../images/Moto G9 Plus.png'
import IphoneX from '../../images/IphoneX.jpg'
import Iphone12Pro from '../../images/Iphone 12 Pro.png'
import MotoG7 from '../../images/Moto G7.jpg'

const ItemList = () => {

    let celulares = [
        {
            id: 1,
            title: 'Huawei P30 Pro',
            price:179.999,
            pictureURL:HuaweiP30Pro
        },
        {
            id: 2,
            title: 'Huawei P40 Pro',
            price:229.999,
            pictureURL:HuaweiP40Pro
        },
        {
            id: 3,
            title: 'Iphone 12 Pro',
            price:299.999,
            pictureURL:Iphone12Pro
        },
        {
            id: 4,
            title: 'Iphone X',
            price:249.999,
            pictureURL: IphoneX
        },
        {
            id: 5,
            title: 'Moto G7',
            price:44.999,
            pictureURL: MotoG7
        },
        {
            id: 6,
            title: 'Moto G9 Plus',
            price:49.999,
            pictureURL: MotoG9Plus
        },
        {
            id: 7,
            title: 'Samsung Galaxy S10',
            price:79.999,
            pictureURL: SamsungGalaxyS10
        },
        {
            id: 8,
            title: 'Samsung Galaxy S20',
            price:86.999,
            pictureURL: SamsungGalaxyS20
        },
    ]

    let [celular, setCelular] = useState([])

    useEffect(() => {
        let promesaCelulares = new Promise((response,reject)=>{
            if (celulares) {
                response(setCelular(celular = celulares))
            }else reject('Hubo un error de la promesa al traer los celulares')
            })
            promesaCelulares
                .then(console.log('Funcionó. Ahora la variable celular contiene el array de celulares.'))
                .catch((err)=>{console.log(err)})
                .finally(console.log('Promesa finalizada'))
    }, [])


    return (
        <div style={{display:'flex'}}>
            {celular.map(cadaCelular =>          
                <div key={cadaCelular.title} className="card" style={{width:'18em'}}>
                    <img key={cadaCelular.pictureURL} src={cadaCelular.pictureURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 key={cadaCelular.title} className="card-title">{cadaCelular.title}</h5>
                        <p key={cadaCelular.price} className="card-text">${cadaCelular.price}</p>
                        <button className="btn btn-primary">Agregar al carrito</button>
                    </div> 
                </div>)}
        </div>
    )
}

export default ItemList
