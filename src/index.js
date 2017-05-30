import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux'

import 'admin-lte/dist/css/AdminLTE.min.css'

import store from './store'

import App from './App';
import './index.css';

import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCseH8VVh3E2xhD-vvvDvK1xi4QD6hSOrE",
  authDomain: "projektf-b3d8e.firebaseapp.com",
  databaseURL: "https://projektf-b3d8e.firebaseio.com",
  projectId: "projektf-b3d8e",
  storageBucket: "projektf-b3d8e.appspot.com",
  messagingSenderId: "454308380303"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
  <App />
    </Provider>,
  document.getElementById('root')
);

