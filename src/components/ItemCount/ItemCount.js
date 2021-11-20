import React, {useState} from 'react'
import { useContext } from 'react'
import { CartContextProvider } from '../Contexts/CartContext'
import Swal from 'sweetalert2'

const ItemCount = ({initial, setInitial, productoFiltrado}) => {

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
            setStockActualizado(stockActualizado = stockActualizado-initial)
            productoFiltrado.stock = stockActualizado;
        }
    }

    //obtengo el context de cantidad de items en carrito y hago destructuring
    const cartContext = useContext(CartContextProvider)
    let {addItem} = cartContext

    //cuando pusheo a la variable que guarda los items a comprar, la cntidad de items es igual a initial
    productoFiltrado.qty = initial;

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
                        onClick={() => {actualizarStock();
                                        addItem(productoFiltrado.title, productoFiltrado.id, productoFiltrado.qty, productoFiltrado.price, productoFiltrado.price*productoFiltrado.qty, productoFiltrado.stock, productoFiltrado.imgURL);
                                        Swal.fire('Agregado al carrito exitosamente')}}
                        id='agregarAlCarrito'
                        style={{width:'100%'}}
                        className='mt-3 btn btn-primary agregar'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount