import React from 'react'

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
            students => this.setState({
                products: products
            })
        )
    }

    render() {
        const productId = parseInt(this.props.match.params.productId, 10)
        return (
            <div>
                Products: {productId}
                {
                    this.state.students.filter(
                        product => product.uid === productId
                    ).map(
                        product => (
                            <ul key={product.uid}>
                                <li>{product.price}</li>
                            </ul>
                        )
                    )
                }
            </div>
        )
    }
}

export default Product