import React, { useContext, useState } from 'react'
import { CartContextProvider } from '../Contexts/CartContext'

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
            console.log(elementoEnArrayIndex)
            itemsEnCarrito.splice(elementoEnArrayIndex,elementoEnArrayIndex)
            console.log(itemsEnCarrito)
	    }
    }
    
    let arrayPrecios = itemsEnCarrito.map(cada=>cada.productFinalPrice)

    function sumar_array(array_numeros){
        
        var suma = 0;
        
        array_numeros.forEach(function(numero){
            suma += numero;
        });
        
        return suma;
        
    }
    
    var suma = sumar_array(arrayPrecios); //La función de suma

    return (
        <div>
            {itemsEnCarrito.length
            ?
                <>
                <div className='m-5'>
                    <div className='container' style={{display:'flex', flexDirection:'row'}}>
                        <div className="col-2"></div>
                        <h3 className="col-2">Producto</h3>
                        <h3 className="col-2">Precio</h3>
                        <h3 className="col-2">Cantidad</h3>
                        <h3 className="col-2">Precio total</h3>
                    </div>
                    {/* arranca false vaciarCarro y muestro los productos, cuando apreta en borrar todo lo seteo true */}
                    {vaciarCarro===false
                    ?
                    <div>
                    {itemsEnCarrito.map(cadaUno =>
                    <div key={cadaUno.id} className='container mb-3'>
                        <hr />
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
                            <div className='col-2'></div>
                            <div className='col-2'> {cadaUno.name} </div>
                            <div className='col-2'> ${cadaUno.productPrice} </div>
                            <div className='col-2'> {cadaUno.qty}u. </div>
                            <div className='col-2'> ${parseInt(cadaUno.productPrice*cadaUno.qty)} </div>
                            <button onClick={(e)=>{eliminarElemento('botonCarrito', cadaUno); sumar_array()}} className='btn btn-danger' id='botonCarrito'>X</button>
                        </div>
                    </div>
                    )}
                    <p style={{textAlign:'center'}}>Precio total final {suma} </p>
                    </div>
                    :
                    null }
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                        <button className='btn btn-danger' onClick={() => borrarTodos()}>Borrar todo</button>
                        <button className='btn btn-success' onClick={()=>alert('Aún no disponible')}>Finalizar compra</button>
                    </div>
                </div>
                </>

            // itemsEnCarrito.map(cadaCelular =>
            //     <div key={cadaCelular.id} className="card" style={{width:'18em'}}>
            //         <p>{cadaCelular.name}</p>
            //     </div>)
            :
            <div>No hay items en el carrito aun</div>}

        </div>
    )
}

export default Cart
