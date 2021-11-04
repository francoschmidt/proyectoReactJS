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

    return (
        <CartContextProvider.Provider value={{addItem, itemsEnCarrito}}>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContext