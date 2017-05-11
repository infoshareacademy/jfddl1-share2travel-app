/**
 * Created by karolina on 10.05.17.
 */
import React from 'react';
import products from './data/products'
import './App.css';
import './Karola.css';
// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom'



        const Karola = () => (

            <div>
                <h1>Products</h1>
                <ul>
                    {
                        products.map(
                            dat => (
                                <li key={dat.id}>
                                    {dat.product},{dat.price},{dat.color}, {dat.producer}
                                </li>
                            )
                        )

                        // students.map(function (student) {
                        //   return <li key={student.id}>{student.name}</li>
                        // })
                    }
                </ul>
            </div>


        )

export default Karola