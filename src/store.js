import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import sidebar from './state/sidebar'
import favoriteProducts from './state/favoriteProducts'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  ),
  persistState(['smartCounter','favoriteProducts'], { key: 'app2'})
)

const reducer = combineReducers({
  sidebar: sidebar,
    favoriteProducts:favoriteProducts,

})

const store = createStore(
  reducer,
  enhancer
)

export default store

