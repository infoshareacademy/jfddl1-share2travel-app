import React from 'react'
import { connect } from 'react-redux'
import { remove } from './state/favoriteProducts'
import { fetchProducts } from './state/products'
import './Comp.css'

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
                <h1>Ulubione</h1>
                {this.props
                    .favIds
                    .map(uid => (


                            <p key={uid}>

                                {this.props.products.data !== null ?
                                            <div className="Comp-FP-div">
                                              <ul >
                                                <div className="Comp-list">
                                                  <li> {this.props.products.data.productsByUid[uid].productName + '  '}
                                                    <button onClick={() => this.props.removeFromFavorites(uid)}>
                                                      Usuń
                                                    </button>
                                                  </li>
                                                </div>

                                              </ul>
                                            </div>

                                    : null
                                }
                            </p>

                    ))
                }
            </div>
        )
    }
})