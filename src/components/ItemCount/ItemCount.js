import React from 'react'

const ItemCount = ({stock, setStock, initial, setInitial}) => {
    
    //cuando clickeo en sumar seteo el 'initial'
    function onAdd(){
        if (initial < stock){
            setInitial(initial+1)
        }
    }
    //cuando clickeo en restar seteo el 'initial'
    function onRemove(){
        if(initial > 0){
            setInitial(initial-1)
        }
    }
    //muestro mensajes y seteo el stock dsp de agregar al carrito
    function restarStock(){
        if(stock < initial){
            alert('No hay suficiente stock')
        }else{
            alert('Producto agregado exitosamente');
            setStock(stock = stock-initial);
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
                    <button onClick={()=>restarStock()} id='agregarAlCarrito' className='mt-3 btn btn-primary'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}















// const CantidadClick = ({stock}) => {

//     // stock => tienes que recibir como parametro en el main , recuerda poner lo !

//     // es el state que manipula la cantidad de clicks que haz hecho ! 
//     // recuerda descomentar lo en el Main , si vas a usar ) 

//     const [clicks , setClicks] = useState(0)

//     // es la funcion que incrementa los clicks siempre y cuando sean menor que el stock 
//     const addClick = () => {
//         if(clicks < stock) setClicks(clicks+1)
//     }

//     // es la funcion que disminuye los clicks siempre y cuando sean mayor a 0 
//     const removeClick = () => {
//         if(stock > 0) setClicks(clicks-1)
//     }
//     return (
//         <div>
//             {/* Aca en el h1 muestro los clicks y en onClicks de bontones estoy asignando las funciones correspondientes */}
//         <h1>{clicks}</h1>
//         <button onClick={()=>addClick()}>Add</button>
//         <button onClick={()=>removeClick()}>Remove</button>
//         </div>
//     )
// }

// export default CantidadClick




















export default ItemCount