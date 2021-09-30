import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <div id='contenedorCartWidget'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>0</span>
        </div>
        
    )
}

export default CartWidget
