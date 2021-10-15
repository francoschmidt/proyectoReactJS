import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Main = () => {

    let nombreDelSitio = 'Schmidt Store'

    let [celular, setCelular] = useState([])

    return (
        <BrowserRouter>
            <Navbar nombreDelSitio={nombreDelSitio} />
            <Switch>
                <Route exact path='/'>
                    <Home nombreDelSitio={nombreDelSitio}/>
                    <ItemListContainter celular={celular} setCelular={setCelular} />
                    {/* <ItemDetailContainer celular={celular} setCelular={setCelular} /> */}
                </Route>
                <Route exact path='/prueba'>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main