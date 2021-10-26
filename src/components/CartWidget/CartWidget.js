import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { CartContextProvider } from '../Contexts/CartContext'

const CartWidget = () => {

    const cartContext = useContext(CartContextProvider)
    let {itemsEnCarrito} = cartContext;
    
    return (
        <div id='contenedorCartWidget'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <h6>{itemsEnCarrito.length}</h6>
        </div>
        
    )
}

export default CartWidget