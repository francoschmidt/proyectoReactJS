import Swal from 'sweetalert2'

export const alertTerminos = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Actualmente no disponible'
    })
}

export const noItemsEnCarrito = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay items en el carrito!',
    })
}