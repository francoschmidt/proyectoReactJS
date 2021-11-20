import React, {useContext, useState, useEffect} from 'react'
import { CartContextProvider } from '../Contexts/CartContext'
import imgCarritoVacio from '../../images/carritoVacio.png'
import { Link } from 'react-router-dom'
import '../Formulario/Formulario.css'


const Formulario = () => {

    //traigo el json de provincias y ciudades
    const customData = require('../CiudadesJSON/ciudades.json');

    //traigo lo que voy a usar del context
    const cartContext = useContext(CartContextProvider)
    const {itemsEnCarrito, generarOrden, buyer, buyerDatos} = cartContext

    const [provincias, setProvincias] = useState()
    
    //seteo provincias 
    useEffect(() => {
        setProvincias(customData.map(cada => cada))
    },[])

    let [provinciaElegida, setProvinciaElegida] = useState(0)

    let [nombre, setNombre] = useState()
    let [apellido, setApellido] = useState()
    let [mail, setMail] = useState()
    let [provincia, setProvincia] = useState('Buenos Aires')
    let [ciudad, setCiudad] = useState('Abasto')
    let [direccionCalle, setDireccionCalle] = useState()
    let [direccionAltura, setDireccionAltura] = useState()

    let datosPersonales = {nombre: nombre, apellido: apellido, mail: mail, provincia: provincia}

    console.log(datosPersonales)
    
    buyer(nombre, apellido, mail)
    console.log(buyerDatos)

    return (
        <>
        {itemsEnCarrito.length
        ?
        <div style={{display:'flex', justifyContent: 'center'}}>
            <form style={{width:'80%', display: 'flex', flexDirection:'column', alignItems: 'center'}} onSubmit={generarOrden} name="row g-3 needs-validation">
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
                <div className="col-md-3 fs-3 fw-bolder camposFormulario">
                    <label htmlFor="validationCustom04" className="form-label">Provincia</label>
                    <select onChange={(e)=>setProvinciaElegida(e.target.value)} id='seleccionarProvincia' className="form-select" id="validationCustom04" required>
                    {provincias?
                    provincias.map(cada => <option key={cada.nombre} value={provincias.indexOf(cada)}>{cada.nombre}</option>)
                    :
                    null}
                    </select>
                </div>
                <div className="col-md-6 fs-3 fw-bolder camposFormulario">
                    <label className="form-label">Ciudad</label>
                    <select id='seleccionarProvincia' className="form-select" required>
                    {provincias?
                    provincias[provinciaElegida].ciudades.map(cada => <option key={cada.id} value={cada.nombre}>{cada.nombre}</option>)
                    :
                    null}
                    </select>
                </div>
                <div className="fs-3 fw-bolder camposFormulario">
                    <label className="form-label">Dirección</label>
                    <div style={{display:'flex'}}>
                        <input placeholder='Alem' type="text" className="form-control" required />
                        <input placeholder='444' type="number" style={{width:'40%', marginLeft:'5%'}} className="form-control" required />
                    </div>
                </div>
                <div className="col-3 m-3">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Acepto <a href=''>términos y condiciones </a>
                    </label>
                    </div>
                </div>
                <div className='d-flex m-3 justify-content-around' style={{width:'30%'}}>
                    <Link to='/cart'> <button className="btn btn-primary">Volver</button> </Link>
                    <button type='submit'  className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
        :
        <div className='d-flex flex-column mt-5 mb-5 align-items-center'>
            <h1 style={{fontFamily:'monospace'}}>Su carrito se encuentra vacío</h1>
            <img alt='carritoVacio' style={{height:'375px', width:'425px', marginBottom:'40px'}} src={imgCarritoVacio}></img>
            <p className='text-center fs-4'>Por favor agregue algún producto al carrito para realizar su compra</p>
        </div>
        }
        </>
    )
}

export default Formulario