import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/Navbar.css'
const Navbar = () => {
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary" id='nav'>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="#nav">BrBa Store</a>
                    <button id='navbarToggler' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id='navbarTogglerIcon'></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active fs-5 mx-3" aria-current="page" href="#nav">Home</a>
                            <a className="nav-link active fs-5 mx-3" href="#nav">Nosotros</a>
                            <a className="nav-link active fs-5 mx-3" href="#nav">Productos</a>
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
