import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import Loader from 'react-loader-spinner';
import Home from '../Home/Home';
import '../Main/Main.css'

const Main = () => {
    let nombreDelSitio = 'Breaking Bad Store'

    let [loader, setLoader] = useState (true);

    setTimeout(() => {
        setLoader(loader = false)
    }, 2000);

    return (
        <>
            <Navbar/>
            <ItemListContainter nombreDelSitio={nombreDelSitio}/>
            <Home/>
            {loader?
            <div id='loaderContainer'>
                <Loader color={'greenyellow'} type={'Puff'}/>
            </div>
            :
            <ItemDetailContainer loader={loader} setLoader={setLoader} />
            }
            <Footer/>
        </>

    )
}

export default Main