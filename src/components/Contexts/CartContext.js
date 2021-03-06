import { createContext } from 'react'
import firebase from 'firebase/app'
import { getFirestore } from '../services/firebase'
import { reducer } from '../helpers/helpers'
import { compraExitosa } from '../helpers/helpers'

export const CartContextProvider = createContext()

const CartContext = ({children}) => {

    let itemsEnCarrito = []

    function addItem(name, id, qty, productPrice, productFinalPrice, stock, imgURL) {
        //si todavia no agregue el elemento que estoy agregando lo pusheo al array, sino solamente actualizo qty, final price y stock
        if(!itemsEnCarrito.find(elemento => elemento.id === id)){
            itemsEnCarrito.push({name, id, qty, productPrice, productFinalPrice, stock, imgURL})
        }else{
            let compraMismoProducto = itemsEnCarrito.find(elemento => elemento.id === id)
            compraMismoProducto.qty += qty
            compraMismoProducto.stock -= qty
            compraMismoProducto.productFinalPrice += qty*productPrice
        }
    }
    
    //precio final de cada producto lo guardo en un array aparte
    let preciosFinalesCadaProducto = [];

    if(itemsEnCarrito.length){
        itemsEnCarrito.map(cadaUno=>
            preciosFinalesCadaProducto.push(cadaUno.productPrice * cadaUno.qty)
            )
        }
    
    let precioFinalTotal = preciosFinalesCadaProducto.length?preciosFinalesCadaProducto.reduce(reducer):0

    let buyerDatos = {}
    //funcion para agregar todos los valores de los input al objeto buyerDatos
    const buyer = (nombre, apellido, mail, telefono, provincia, ciudad, direccionCalle, direccionAltura) =>{
        buyerDatos.nombre = `${nombre} ${apellido}`
        buyerDatos.mail = mail
        buyerDatos.telefono = telefono
        buyerDatos.provincia = provincia
        buyerDatos.ciudad = ciudad
        buyerDatos.direccionCalle = direccionCalle
        buyerDatos.direccionAltura = direccionAltura
    }

    //funcion que genera orden y setea el stock
    const generarOrden = (e) => {
        e.preventDefault()

        //genero datos de la orden
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = buyerDatos
        orden.products = itemsEnCarrito.map(cadaProducto => {
            const id = cadaProducto.id
            const name = cadaProducto.name
            const qty = cadaProducto.qty
            const productPrice = cadaProducto.productPrice
            const productFinalPrice = cadaProducto.productFinalPrice
        
            return {id, name, qty, productPrice, productFinalPrice}
        })

        //la repito porque la que esta afuera de la funcion me toma como valor 0
        let preciosFinales = itemsEnCarrito.map(cadaUno=>
            cadaUno.productPrice * cadaUno.qty
        )
        orden.ordenTotalPrice = preciosFinales.reduce(reducer)

        //le muestro al cliente el id de la compra
        const db = getFirestore()
        const ordenesCollection = db.collection('ordenes')
        ordenesCollection.add(orden)
            .then(res => compraExitosa (res.id))
            .catch(err => console.log(err))

        //actualiza todos los items que estan en itemsEnCarrito. La uso m??s abajo
        const itemsToUpdate = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', itemsEnCarrito.map(item => item.id)
        )
        
        const batch = db.batch()

        //por cada item restar del stock la cantidad en el carrito
        itemsToUpdate.get()
            .then(collection=>{
                collection.docs.forEach(document=>{
                    batch.update(document.ref, {
                        stock: document.data().stock - itemsEnCarrito.find(item => item.id === document.id).qty
                    })
                })

                batch.commit()
            })
    }

    return (
        <CartContextProvider.Provider value={{buyerDatos, buyer, addItem, itemsEnCarrito, preciosFinalesCadaProducto, precioFinalTotal, generarOrden}}>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContext