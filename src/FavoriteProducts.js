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
                                Data From New DB ;)
                                {this.props.products.data !== null ? 
                                            <span>
                                                {this.props.products.data.productsByUid[uid].productName}
                                                <button onClick={() => this.props.removeFromFavorites(uid)}>
                                                    Remove
                            </button>
                                            </span>
                                    : null
                                }
                            </p>

                    ))
                }
            </div>
        )
    }
})