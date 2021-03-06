import React, { useContext, useState } from 'react'
import { CartContextProvider } from '../Contexts/CartContext'
import imgCarritoVacio from '../../images/carritoVacio.png'
import { Link } from 'react-router-dom'
import '../Formulario/Formulario.css'
import { alertTerminos } from '../helpers/helpers'

const Formulario = () => {

    //traigo el json de provincias y ciudades
    const customData = require('../CiudadesJSON/ciudades.json');
    const provincias = customData

    //traigo lo que voy a usar del context
    const cartContext = useContext(CartContextProvider)
    const {itemsEnCarrito, generarOrden, buyer} = cartContext

    //array que guarda el index de provincia elegida
    let [provinciaElegida, setProvinciaElegida] = useState(0)

    //datos que se setean cuando hay onChanges en los input
    let [nombre, setNombre] = useState()
    let [apellido, setApellido] = useState()
    let [mail, setMail] = useState()
    let [telefono, setTelefono] = useState()
    let [provincia, setProvincia] = useState('Buenos Aires')
    let [ciudad, setCiudad] = useState('Abasto')
    let [direccionCalle, setDireccionCalle] = useState()
    let [direccionAltura, setDireccionAltura] = useState()
    
    buyer(nombre, apellido, mail, telefono, provincia, ciudad, direccionCalle, direccionAltura)

    //esta funcion la ejecuto cuando se cambia la provincia, no podia hacerla como los demas input con (e.target.value) porque como value lo tengo al index,
    //entonces seteo provincia con provincia[y aca el index de la provincia que se seleccionÃ³].nombre
    function setearProvincia(){
        if(provinciaElegida){
            setProvincia(provincias[provinciaElegida].nombre)
        }
    }

    return (
        <>
        {/* si hay items en el carrito muestro el formulario, sino aviso que no hay items en el carrito */}
        {itemsEnCarrito.length
        ?
        <div id='contenedorFormulario' >
            <form id='formularioDatos' onSubmit={generarOrden} name="row g-3 needs-validation">
                <div className="col-md-4 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="validationCustom01" placeholder="Juan" required />
                </div>
                <div className="col-md-4 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" id="validationCustom02" placeholder="Perez" required />
                </div>
                <div className="col-md-4 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustomUsername" className="form-label">E-mail</label>
                    <div className="input-group has-validation">
                        <input onChange={(e) => setMail(e.target.value)} type="email" placeholder='juanperez@hotmail.com' className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-4 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustomUsername" className="form-label">TelÃ©fono</label>
                    <div className="input-group has-validation">
                        <input onChange={(e) => setTelefono(e.target.value)} type="number" placeholder='2915123456' className="form-control" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-3 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustom04" className="form-label">Provincia</label>
                    {/* recorro todas las provincias y las muestro */}
                    <select onChange={(e)=>setProvinciaElegida(e.target.value)} onClick={setearProvincia} id='seleccionarProvincia' className="form-select" required>
                    {provincias?
                    provincias.map(cada => <option key={cada.nombre} value={provincias.indexOf(cada)}>{cada.nombre}</option>) 
                    :
                    null}
                    </select>
                </div>
                <div className="col-md-6 fs-3 fw-bolder camposFormulario">
                    <label className="form-label">Ciudad</label>
                    {/* en funcion a la provincia elegida muestro las ciudades de la misma */}
                    <select onChange={(e)=>setCiudad(e.target.value)} id='seleccionarProvincia' className="form-select" required>
                    {provincias?
                    provincias[provinciaElegida].ciudades.map(cada => <option key={cada.id} value={cada.nombre}>{cada.nombre}</option>)
                    :
                    null}
                    </select>
                </div>
                <div className="fs-3 fw-bolder camposFormulario">
                    <label className="form-label">DirecciÃ³n</label>
                    <div id='divDireccion'>
                        <input placeholder='Alem' onChange={(e)=>setDireccionCalle(e.target.value)} type="text" className="form-control" required />
                        <input placeholder='444' onChange={(e)=>setDireccionAltura(e.target.value)} type="number" id='direccionAltura' className="form-control" required />
                    </div>
                </div>
                <div className="col-3 m-3">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Acepto <strong id='terminosYCondiciones' 
                            onClick={()=>alertTerminos()}>tÃ©rminos y condiciones </strong>
                    </label>
                    </div>
                </div>
                <div className='d-flex m-3 justify-content-around' id='botonesVolverEnviar'>
                    <Link to='/cart'> <button className="btn btn-primary">Volver</button> </Link>
                    <button type='submit' className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
        :
        <div className='d-flex flex-column mt-5 mb-5 align-items-center'>
            <h1 id='avisoCarritoVacio'>Su carrito se encuentra vacÃ­o</h1>
            <img alt='carritoVacio' id='carritoVacioImg' src={imgCarritoVacio}></img>
            <p className='text-center fs-4'>Por favor agregue algÃºn producto al carrito para realizar su compra</p>
        </div>
        }
        </>
    )
}

export default Formulario