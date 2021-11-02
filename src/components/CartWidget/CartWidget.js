import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = ({itemsEnCarrito}) => {

    return (
        <div id='contenedorCartWidget'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <h6>{itemsEnCarrito.length}</h6>
        </div>
    )
}

export default CartWidget