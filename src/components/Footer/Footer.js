import React from 'react'

const Footer = () => {
    return (
        <footer className="footer container-fluid" style={{backgroundColor:'aqua'}}>
        <div className="footer__filtros d-flex flex-column">
          <p className="footer__direccion text-center mb-1 mt-2">Santiago Carbone 314 - Tornquist</p>
          <p className="footer__copyright text-center">© Copyright 2021 BrBaStore</p>
        </div>
    </footer>
    )
}

export default Footer