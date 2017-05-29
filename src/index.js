import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux'

import 'admin-lte/dist/css/AdminLTE.min.css'

import store from './store'

import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDongyiSAH3zVZeaXMp_P552qVZdMEUbEM",
  authDomain: "fireproject-8af7a.firebaseapp.com",
  databaseURL: "https://fireproject-8af7a.firebaseio.com",
  projectId: "fireproject-8af7a",
  storageBucket: "fireproject-8af7a.appspot.com",
  messagingSenderId: "30864284486"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
  <App />
    </Provider>,
  document.getElementById('root')
);

