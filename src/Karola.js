import React, {Component} from 'react'
import GenericTable from './GenericTable'
import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import './Karola.css';

class Karola extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      products: null
    };
    fetch(
      process.env.PUBLIC_URL + '/data/products.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        products: data.products
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
        {
          this.state.products !== null ?
            <GenericTable
              data={
                this.state.products.filter(
                  item => this.state.searchPhrase === '' ?
                    true : item.productName.includes(this.state.searchPhrase)
                ).sort(
                  (a, b) => a.price - b.price
                )}
              config={[
                {
                  name: 'productName',
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
            /> : null
        }
      </div>
    )
  }
}

export default Karola