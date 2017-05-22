import React from 'react'
import { connect } from 'react-redux'

import { remove } from './state/favoriteProducts'
import { fetchProducts } from './state/products'

export default connect(
    state => ({
        products: state.products,
        favIds: state.favoriteProducts
    }),
    dispatch => ({
        fetchProducts: () => dispatch(fetchProducts()),
        removeFromFavorites: (productId) => dispatch(remove(productId)),
    })
)(class FavoriteProducts extends React.Component {
    componentWillMount() {
        this.props.fetchProducts()
    }
    render() {
        return (
            <div>
                <h1>favorite Products</h1>
                {this.props
                    .favIds
                    .map(uid => (
                        <p key={uid}>
                            {this.props.products.data !== null ? 
                                this.props
                                    .products
                                    .data
                                    .products
                                    .filter(product => product.uid === uid)
                                    .map(product => (
                                        <span key={product.uid}>
                                            {product.name}
                                            <button onClick={() => this.props.removeFromFavorites(product.uid)}>
                                                Remove
                        </button>
                                        </span>
                                    ))
                                : null
                            }
                        </p>
                    ))
                }
            </div>
        )
    }
})