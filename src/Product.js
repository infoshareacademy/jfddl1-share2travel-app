import React from 'react'
import DetailedView from './DetailedView'

class Product extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    fetch(
      process.env.PUBLIC_URL + '/data/products.json'
    ).then(
      response => response.json()
    ).then(
      products => this.setState({
        products: products.slice(0, 10)
      })
    )
  }

  render() {
    const productId = parseInt(this.props.match.params.productId, 10)
    return (
      <DetailedView/>
    )
  }
}

export default Product