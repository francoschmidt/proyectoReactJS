import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({initial, setInitial, productoFiltrado, compra, setCompra}) => {

    //aca guardo el stock dinamicamente, aunque no se guarda directamente en la prop xcelu.stock, sino que queda aca.
    //Despues paso que stock actualizado es igual a stock. Inicia con el valor 'stock' del producto en el que me encuentro
    let [stockActualizado, setStockActualizado] = useState(productoFiltrado.stock)
    
    //cuando clickeo en sumar seteo el 'initial'
    function onAdd(){
        if (initial < stockActualizado){
            setInitial(initial + 1)
        }
    }
    
    //cuando clickeo en restar seteo el 'initial'
    function onRemove(){
        if(initial > 1){
            setInitial(initial - 1)
        }
    }

    //muestro mensajes y seteo el stock original del producto y el stockActualizado
    function actualizarStock(){
        if (initial <= stockActualizado){
            alert('Agregado al carrito exitosamente')
            setStockActualizado(stockActualizado = stockActualizado-initial)
            productoFiltrado.stock = stockActualizado;
            console.log(productoFiltrado.stock + ' en stock')
        }
    }

    //seteo el state de compra (de ItemDetail) cuando clickea en agregar al carrito
    function setearCompra(){
        setCompra(compra=initial)
        console.log(`va a comprar ${compra} productos`)
    }

    //funcion para eliminar el boton de agregar al carrito que se va a ejecutar cuando se clickee en dicho boton
    function eliminarElemento(id){
	    let botonAgregarAlCarrito = document.getElementById(id);	
	    if (!botonAgregarAlCarrito){
    		alert("El elemento selecionado no existe");
	    } else {
		    let padre = botonAgregarAlCarrito.parentNode;
		    padre.removeChild(botonAgregarAlCarrito);
	    }
    }

    return (
        <div className="text-dark mb-3" style={{width: '100%'}}>
            <div>
                <div className='d-flex justify-content-between bg-white' style={{border:'1px solid black', borderRadius:'5px'}}>
                    <button 
                        onClick={()=>onRemove()} 
                        id='botonSumarProducto' 
                        className='d-inline btn btn-light fs-3' 
                        style={{color:'blue'}}>-</button>
                    <div className='d-inline fs-1'>{initial}</div>
                    <button 
                        onClick={()=>onAdd()} 
                        id='botonRestarProducto' 
                        className='d-inline btn btn-light fs-3' 
                        style={{color:'blue'}}>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button 
                        disabled={initial > stockActualizado ? true:null} 
                        onClick={() => {actualizarStock();setearCompra();eliminarElemento('agregarAlCarrito')}} 
                        id='agregarAlCarrito' 
                        style={{width:'100%'}}
                        className='mt-3 btn btn-primary agregar'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount