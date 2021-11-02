import React, {useContext} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { CartContextProvider } from '../Contexts/CartContext'
import Swal from 'sweetalert2'

const Navbar = ({nombreDelSitio}) => {
    
    //traigo el contexto para mostrar los elementos en el carrito
    const cartContext = useContext(CartContextProvider)
    const {itemsEnCarrito} = cartContext

    //alert no hay items en carrito
    function alert(){
        Swal.fire({
            title: '<h2>Carrito vacío</h2>',
            icon: 'info',
            html:
              'Agregue algún producto al carrito para ver los detalles de la compra',
            focusConfirm: true,
            confirmButtonText:
              '<a class="text-decoration-none text-white" href="/">Volver a comprar</a>',
        })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary" id='nav'>
                <div className="container-fluid">
                    <Link to='/' className='navbarLinks'>
                        <h5 className="navbar-brand fs-3">{nombreDelSitio}</h5>
                    </Link>
                    <button id='navbarToggler' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id='navbarTogglerIcon'></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/marca/huawei' className='navbarLinks'><h5 className="nav-link active fs-5 mx-3">Huawei</h5></Link>
                            <Link to='/marca/iphone' className='navbarLinks'><h5 className="nav-link active fs-5 mx-3">Iphone</h5></Link>
                            <Link to='/marca/motorola' className='navbarLinks'><h5 className="nav-link active fs-5 mx-3">Motorola</h5></Link>
                            <Link to='/marca/samsung' className='navbarLinks'><h5 className="nav-link active fs-5 mx-3">Samsung</h5></Link>
                        </div>
                    </div>
                    {/* CLICK EN CARRITO: si hay productos en el carrito los muestro sino muestro el alert  */}
                    {itemsEnCarrito.length
                    ?
                    <Link to='/cart' className='navbarLinks'>
                        <div id='contenedorCartWidget'>
                            <CartWidget itemsEnCarrito={itemsEnCarrito} />
                        </div>
                    </Link>
                    :
                    <div>
                        <div onClick={()=>alert()} className='navbarLinks'>
                            <CartWidget itemsEnCarrito={itemsEnCarrito} />
                        </div>
                    </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar   