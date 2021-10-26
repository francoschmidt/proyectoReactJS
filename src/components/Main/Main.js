import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import CartContext from '../Contexts/CartContext'
import Cart from '../Cart/Cart';

const Main = () => {

    //defino nombre del sitio para pasarlo a todas las vistas donde lo muestro
    let nombreDelSitio = 'Schmidt Store'

    //declaro el array allCellph para mandarle en el ItemList los objetos de celulares
    const [allCellph, setAllCellph] = useState([]);

    return (
        <CartContext>
        <BrowserRouter>
            <Navbar nombreDelSitio={nombreDelSitio} />
            <Switch>
                <Route exact path='/'>
                    <Home nombreDelSitio={nombreDelSitio}/>
                    <ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} />
                    {/* <ItemDetailContainer allCellph={allCellph} setAllCellph={setAllCellph} /> */}
                </Route>
                <Route exact path='/marca/:id'>
                    <ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} />
                </Route>
                <Route exact path='/item/:id'>
                    <div style={{display:'none'}}><ItemListContainter allCellph={allCellph} setAllCellph={setAllCellph} /></div>
                    <ItemDetailContainer allCellph={allCellph} setAllCellph={setAllCellph} />
                </Route>
                <Route exact path='/cart'>
                    <Cart/>
                </Route>
            </Switch>
            <Footer nombreDelSitio={nombreDelSitio} />
        </BrowserRouter>
        </CartContext>
    )
}

export default Main