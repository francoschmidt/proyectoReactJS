import React, {useState} from 'react'

const ItemCount = ({initial, setInitial, stock}) => {
    
    let [stockActualizado, setStockActualizado] = useState(stock)

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


    //muestro mensajes y seteo el stockActualizado y carrito dsp de agregar productos
    function actualizarStock(){
        if (initial <= stockActualizado){
            alert('Agregado al carrito exitosamente');
            setStockActualizado(stockActualizado = stockActualizado-initial);
        }
    }
    
    return (
        <div className="text-dark mb-3" style={{width: '100%'}}>
            <div className="card-body">
                <div className='d-flex justify-content-between bg-white' style={{border:'1px solid black', borderRadius:'5px'}}>
                    <button onClick={()=>onRemove()} id='botonSumarProducto' className='d-inline btn btn-light fs-3' style={{color:'blue'}}>-</button>
                    <div className='d-inline fs-1'>{initial}</div>
                    <button onClick={()=>onAdd()} id='botonRestarProducto' className='d-inline btn btn-light fs-3' style={{color:'blue'}}>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button disabled={initial > stockActualizado ? true:null} onClick={()=>actualizarStock()} id='agregarAlCarrito' className='mt-3 btn btn-primary'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount