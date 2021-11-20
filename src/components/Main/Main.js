import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import CartContext from '../Contexts/CartContext'
import Cart from '../Cart/Cart';
import { getFirestore } from '../services/firebase';
import Formulario from '../Formulario/Formulario';

const Main = () => {

    //defino nombre del sitio para pasarlo a todas las vistas donde lo muestro
    let nombreDelSitio = 'Schmidt Store'

    //declaro el array allCellph para mandarle en el ItemList los objetos de celulares
    const [allCellph, setAllCellph] = useState([]);
    
    useEffect(()=>{
        setTimeout(() => {
            const db = getFirestore()
            db.collection('productos').get()
            .then(resp => setAllCellph(resp.docs.map(cadaProducto => ({id : cadaProducto.id, ...cadaProducto.data()}))))
            .catch(err => console.log('error ' + err))
        }, 2000);
    }, [])

    //agrego los navbar en todos los route porque sino no se actualiza nunca la vista del navbar entonces no se cambia el numero de cantidad de items en carrito
    return (
        <CartContext>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Navbar nombreDelSitio={nombreDelSitio} />
                    <Home nombreDelSitio={nombreDelSitio}/>
                    <ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} />
                    {/* <ItemDetailContainer allCellph={allCellph} setAllCellph={setAllCellph} /> */}
                </Route>
                <Route exact path='/marca/:id'>
                    <Navbar nombreDelSitio={nombreDelSitio} />
                    <ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} />
                </Route>
                <Route exact path='/item/:id'>
                    <Navbar nombreDelSitio={nombreDelSitio} />
                    <div style={{display:'none'}}><ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} /></div>
                    <ItemDetailContainer allCellph={allCellph} setAllCellph={setAllCellph} />
                </Route>
                <Route exact path='/cart'>
                    <Navbar nombreDelSitio={nombreDelSitio} />
                    <Cart/>
                </Route>
                <Route exact path='/formulario'>
                    <Navbar nombreDelSitio={nombreDelSitio} />
                    <Formulario />
                </Route>
            </Switch>
            <Footer nombreDelSitio={nombreDelSitio} />
        </BrowserRouter>
        </CartContext>
    )
}

export default Main