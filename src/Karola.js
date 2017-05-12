/**
 * Created by karolina on 10.05.17.
 */
import React, {Component} from 'react';
import products from './data/products'
import './App.css';
import './Karola.css';
import Form from './Form'

// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom'
// let prodyctArray = products;

class Karola extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products,
            prodyctArray: products,
        };

    }


    onDataChange(value) {
        let prodyctArray = this.state.prodyctArray.filter((product) => {
            if (product.product.includes(value)) {
                return product
            }
        })

        if(prodyctArray.length === 0){
            prodyctArray = this.state.products;
        }
        console.log('prodyctArray', prodyctArray);

        this.setState({
            prodyctArray
        })
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <Form onUserChange={this.onDataChange.bind(this)}/>

                <ul>
                    {
                        this.state.prodyctArray.map(
                            (dat, index) => (
                                <li key={index}>
                                    {dat.product},{dat.price},{dat.color}, {dat.producer}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>


        )
    }

}

export default Karola