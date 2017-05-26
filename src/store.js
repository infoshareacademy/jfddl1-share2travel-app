import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import sidebar from './state/sidebar'
import favoriteProducts from './state/favoriteProducts'
import products from './state/products'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const isLogged = false;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  ),
  persistState(['smartCounter','favoriteProducts'], { key: 'app2'})
)

const reducer = combineReducers({
  sidebar: sidebar,
  favoriteProducts: favoriteProducts,
  products: products
})

const store = createStore(
  reducer,
  enhancer,
  // isLogged
)

export default store

