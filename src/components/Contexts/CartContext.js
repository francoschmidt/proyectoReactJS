import { createContext} from 'react'

export const CartContextProvider = createContext()

const CartContext = ({children}) => {

    let itemsEnCarrito = []
    
    function addItem(name, id, qty, productPrice, productFinalPrice, stock) {
        //si todavia no agregue el elemento que estoy agregando lo pusheo al array, sino solamente actualizo qty, final price y stock
        if(!itemsEnCarrito.find(elemento => elemento.id === id)){
            itemsEnCarrito.push({name, id, qty, productPrice, productFinalPrice, stock})
        }else{
            let compraMismoProducto = itemsEnCarrito.find(elemento => elemento.id === id)
            compraMismoProducto.qty += qty
            compraMismoProducto.finalPrice += productFinalPrice
            compraMismoProducto.stock -= qty
        }
    }


    return (
        <CartContextProvider.Provider value={{addItem, itemsEnCarrito}}>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContext