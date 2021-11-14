import React, {useContext} from 'react'
import { CartContextProvider } from '../Contexts/CartContext'
import imgCarritoVacio from '../../images/carritoVacio.png'
import { Link } from 'react-router-dom'

const Formulario = ({generarOrden}) => {

    const cartContext = useContext(CartContextProvider)
    const {itemsEnCarrito} = cartContext

    return (
        <>
        {itemsEnCarrito.length
        ?
        <div>
            <form onSubmit={()=>generarOrden()} name="row g-3 needs-validation">
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Juan" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Perez" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">E-mail</label>
                    <div className="input-group has-validation">
                    <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Provincia</label>
                    <select className="form-select" id="validationCustom04" required>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Código postal</label>
                    <input type="number" className="form-control" id="validationCustom05" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Acepto <a href=''>términos y condiciones </a>
                    </label>
                    </div>
                </div>
            <Link to='/cart'> <button>Volver</button> </Link>
            <button type='submit'>Enviar</button>
            </form>
        </div>
        :
        <div className='d-flex flex-column mt-5 mb-5 align-items-center'>
            <h1 style={{fontFamily:'monospace'}}>Su carrito se encuentra vacío</h1>
            <img alt='carritoVacio' style={{height:'375px', width:'425px', marginBottom:'40px'}} src={imgCarritoVacio}></img>
            <p className='text-center fs-4'>Por favor agregue algún producto al carrito para realizar su compra</p>
        </div>
        }
        </>
    )
}

export default Formulario
