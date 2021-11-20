import Swal from 'sweetalert2'

export const alertTerminos = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Actualmente no disponible'
    })
}

export const alertNoItemsEnCarrito = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay items en el carrito!',
    })
}

//funcion para hacer reduce
export const reducer = (previo, siguiente) =>{
    return previo + siguiente
}