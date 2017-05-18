import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import sidebar from './state/sidebar'
// import smartCounter from './state/smartCounter'
// import students from './state/students'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  ),
  persistState(['smartCounter'], { key: 'app2'})
)

const reducer = combineReducers({
  sidebar: sidebar,
  // smartCounter: smartCounter,
  // students: students
})

const store = createStore(
  reducer,
  enhancer
)

export default store

