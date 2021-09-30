import React from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';

const Main = () => {
    
    return (
        <div>
            <Navbar/>
            <ItemListContainter nombreDelSitio='SchmidtStore'/>
        </div>
    )
}

export default Main