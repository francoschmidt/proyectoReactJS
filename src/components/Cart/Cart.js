import React, { useContext, useState } from 'react'
import { CartContextProvider } from '../Contexts/CartContext'
import imgCarritoVacio from '../../images/carritoVacio.png'
import { Link } from 'react-router-dom'
import { reducer } from '../helpers/helpers'
import './Cart.css'

const Cart = () => {

    //traigo el contexto para mostrar los elementos en el carrito
    const cartContext = useContext(CartContextProvider)
    let {itemsEnCarrito} = cartContext;
    
    let [vaciarCarro, setVaciarCarro] = useState(false)

    //cuando clickeo borrar todos el carrito se vacia y tmb el array de productos a comprar
    function borrarTodos() {
        itemsEnCarrito.splice(0, itemsEnCarrito.length)
        setVaciarCarro(vaciarCarro=true)
    }
    
    //cuando clickeo en el boton X elimino la vista de ese elemento en el carrito y lo borro del array
    function eliminarElemento(id, cadaProducto){
	    let botonEliminarElemento = document.getElementById(id);	
	    if (!botonEliminarElemento){
    		alert("El elemento selecionado no existe");
	    } else {
		    let padre = botonEliminarElemento.parentNode;
            let abuelo = botonEliminarElemento.parentNode.parentNode;
		    abuelo.removeChild(padre);
            //aca obtengo el elemento del array itemsEnCarrito que es igual al que estoy clickenado la X y saco su index del array de itemsEnElCarrito
            let elementoEnArray = itemsEnCarrito.find(itemsEnCarrito => itemsEnCarrito.id === cadaProducto.id)
            let elementoEnArrayIndex = itemsEnCarrito.indexOf(elementoEnArray)
            itemsEnCarrito.splice(elementoEnArrayIndex, 1)
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

    return (
        <>
            {/* Si hay items en el carrito los muestro, sino aviso que no hay */}
            {itemsEnCarrito.length
            ?
                <>
                <div className='m-5'>
                    <div id='containerTitulos' className='container'>
                        <div className="col-2"></div>
                        <h3 className="col-2">Celular</h3>
                        <h3 className="col-2">Precio</h3>
                        <h3 className="col-2">Cantidad</h3>
                        <h3 className="col-2">Precio total</h3>
                    </div>
                    {/* arranca false vaciarCarro y muestro los productos, cuando apreta en borrar todo lo seteo true y desaparecen */}
                    {vaciarCarro===false
                    ?
                    <div>
                    {itemsEnCarrito.map(cadaUno =>
                    <div key={cadaUno.id} className='container mb-3'>
                        <hr />
                        <div id='containerDatos' >
                            <div className='col-2'> <img src={cadaUno.imgURL} alt="img" id='imgCelular' /> </div>
                            <div className='col-2'> {cadaUno.name} </div>
                            <div className='col-2'> ${cadaUno.productPrice} </div>
                            <div className='col-2'> {cadaUno.qty}u. </div>
                            <div className='col-2'> ${parseInt(cadaUno.productPrice*cadaUno.qty)} </div>
                            <button onClick={(e)=>{eliminarElemento('botonCarrito', cadaUno)}} className='btn btn-danger' id='botonCarrito'>X</button>
                        </div>
                    </div>
                    )}
                    <p id='precioFinal'>Precio total final ${precioFinalTotal} </p>
                    </div>
                    :
                    null }
                    <div id='botones'>
                        <button className='btn btn-danger' onClick={() => borrarTodos()}>Borrar todo</button>
                        <Link to='/formulario'> <button className='btn btn-success'>Proceder al pago</button></Link>
                    </div>
                </div>
                </>
            :
            <div className='d-flex flex-column mt-5 mb-5 align-items-center'>
                <h1 style={{fontFamily:'monospace'}}>Su carrito se encuentra vacío</h1>
                <img alt='carrito vacio' id='imgCarritoVacio' src={imgCarritoVacio}></img>
                <p className='text-center fs-4'>Por favor agregue algún producto al carrito para realizar su compra</p>
                <Link to='/'><button className='btn btn-primary px-3 mt-3' id='irAComprar'>Ir a comprar</button></Link>
            </div>
            }
        </>
    )
}

export default Cart