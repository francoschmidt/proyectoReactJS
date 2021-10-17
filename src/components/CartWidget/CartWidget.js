import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <div id='contenedorCartWidget'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <h6>0</h6>
        </div>
        
    )
}

export default CartWidget