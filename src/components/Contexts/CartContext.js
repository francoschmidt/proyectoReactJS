import { createContext } from 'react'
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

    const reducer = (previo, siguiente) =>{
        return previo + siguiente
    }

    let precioFinalTotal = preciosFinalesCadaProducto.length?preciosFinalesCadaProducto.reduce(reducer):0

    return (
        <CartContextProvider.Provider value={{addItem, itemsEnCarrito, preciosFinalesCadaProducto, precioFinalTotal}}>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContext