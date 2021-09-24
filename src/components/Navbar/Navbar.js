import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" id='nav'>
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#">Schmidt Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                        <a className="nav-link active fs-5" href="#">Nosotros</a>
                        <a className="nav-link active fs-5" href="#">Productos</a>
                        <a className="nav-link active fs-5" href="#">Carrito</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
