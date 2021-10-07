import React from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainter from '../ItemListContainer/ItemListContainter';

const Main = () => {

    // const task = new Promise ((resolve, reject) => {
    //     resolve(' Error')
    // })
    // task.then(result => {
    //     console.log('resolved' + result)
    // }, err => {
    //     console.log('error: ' + err)
    // }).finally(()=>{
    //     console.log('finally')
    // })


    return (
        <div>
            <Navbar/>
            <ItemListContainter nombreDelSitio='SchmidtStore'/>
        </div>
    )
}

export default Main