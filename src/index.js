import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux'
import 'admin-lte/dist/css/AdminLTE.min.css'
import store from './store'
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCF4_K4fufQdHxs0cr3wYekXFs37Vu2qkE",
  authDomain: "share2travel-1994c.firebaseapp.com",
  databaseURL: "https://share2travel-1994c.firebaseio.com",
  projectId: "share2travel-1994c",
  storageBucket: "share2travel-1994c.appspot.com",
  messagingSenderId: "385410885455"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

