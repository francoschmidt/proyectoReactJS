
import React, {useState} from 'react'

const ItemCount = ({stock, setStock, initial, setInitial}) => {
    
    //cuando clickeo en sumar seteo el 'initial'
    function onAdd(){
        if (initial < stock){
            setInitial(initial + 1)
        }
    }

    //cuando clickeo en restar seteo el 'initial'
    function onRemove(){
        if(initial > 1){
            setInitial(initial - 1)
        }
    }


    //EXPORTAR ESTO AL SPAN QUE DICE 0, PONER EL VALOR DE PRODUCTOSENCARRITO
    let [productosEnCarrito, setproductosEnCarrito] = useState(0);

    //muestro mensajes y seteo el stock y carrito dsp de agregar productos
    function actualizarStock(){
        if (initial === 1){
            alert('Producto agregado exitosamente');
            setStock(stock = stock-initial);
            setproductosEnCarrito(productosEnCarrito = productosEnCarrito + 1)

        }else if(initial > 1){
            alert('Productos agregados exitosamente');
            setStock(stock = stock-initial);
            setproductosEnCarrito(productosEnCarrito = productosEnCarrito + initial)
        }
    }
    
    return (
        <div className="card text-dark mb-3 bg-light" style={{maxWidth: 18 + 'em'}}>
            <div className="card-header text-center">Producto ({stock} disponibles en stock)</div>
            <div className="card-body">
                <div className='d-flex justify-content-between bg-white' style={{border:'1px solid black', borderRadius:'5px'}}>
                    <button onClick={()=>onRemove()} id='botonSumarProducto' className='d-inline btn btn-light fs-3' style={{color:'blue'}}>-</button>
                    <div id='productosEnCarrito' className='d-inline fs-1'>{initial}</div>
                    <button onClick={()=>onAdd()} id='botonRestarProducto' className='d-inline btn btn-light fs-3' style={{color:'blue'}}>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button disabled={initial > stock ? true:null} onClick={()=>actualizarStock()} id='agregarAlCarrito' className='mt-3 btn btn-primary'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount