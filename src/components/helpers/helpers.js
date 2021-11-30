import Swal from 'sweetalert2'

//alert terminos y condiciones
export const alertTerminos = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Actualmente no disponible'
    })
}

//alert compra exitosa
export const compraExitosa = (id) =>{
    Swal.fire({
        title: '<h1>¡Compra exitosa!</h1>',
        icon: 'success',
        html:
          '<h5>El id de su compra es: </h5>' + id + 
          '<h5 class="mt-3">En breve le enviaremos un mail con los datos de su compra y el id de la misma</h5>',
        focusConfirm: false,
        confirmButtonText:
          '<a href="/" class="text-white text-decoration-none"> <i class="fa fa-thumbs-up"></i> Aceptar </a>',
        confirmButtonAriaLabel: 'Thumbs up, great!'
    })
}


//funcion para hacer reduce
export const reducer = (previo, siguiente) =>{
    return previo + siguiente
}