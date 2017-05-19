/**
 * Created by karolina on 10.05.17.
 */
import React, {Component} from 'react'
import products from './data/products'
import GenericTable from './GenericTable'
import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.min.css'

// import { Table } from 'react-bootstrap'

import './Karola.css';




class Karola extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: '',
            products
        };
        fetch(
            process.env.PUBLIC_URL + '/data/products.json'
        ).then(
            response => response.json()
        ).then(
            students => this.setState({
                products: products
            })
        )
    }


    onInputChange = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        return (
        <div>
            <h1>Products</h1>
            <input type="text" onChange={this.onInputChange}/>

            <GenericTable
                data={this.state.products.slice(0,100).filter(
                    item => this.state.searchPhrase === '' ? true : item.product.includes(this.state.searchPhrase)
                ).sort((a,b)=>a.price-b.price)}
                config={[
                    {
                        name: 'product',
                        label: 'products'
                    },
                    {
                        name: 'id',
                        label: 'id'
                    },
                    {
                        name: 'price',
                        label: 'price'
                    },
                    {
                        name: 'color',
                        label: 'color'
                    },
                    {
                        name: 'producer',
                        label: 'producer'
                    }
                ]}
                linked
                linkPrefix="/products"
            />



        </div>

        )
    }

}

export default Karola





