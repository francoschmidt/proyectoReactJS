import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Main = () => {

    let nombreDelSitio = 'Schmidt Store'

    const [allCellph, setAllCellph] = useState([])

    return (
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
            </Switch>
            <Footer nombreDelSitio={nombreDelSitio} />
        </BrowserRouter>
    )
}

export default Main