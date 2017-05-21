import React from 'react'
import { connect } from 'react-redux'

import { remove } from './state/favoriteProducts'

export default connect(
    state => ({
        products: state.products,
        favIds: state.favoriteProducts
    }),
    dispatch => ({
        removeFromFavorites: (productId) => dispatch(remove(productId))
    })
)(
    function favoriteProducts(props) {
        return (
            <div>
                <h1>favorite Products</h1>
                {
                    props.favIds.map(
                        uid => (
                            <p key={uid}>
                                {
                                    props.products.data !== null ?
                                        props.products.data.filter(
                                            product => product.uid === uid
                                        ).map(
                                            product => (
                                                <span key={product.uid}>
                                                    <button
                                                        onClick={() => props.removeFromFavorites(product.uid)}
                                                    >
                              Remove
                            </button>
                          </span>
                                            )
                                        ) : null
                                }
                            </p>
                        )
                    )
                }
            </div>
        )
    }
)