import React, {Component} from 'react';
import './App.css';

import Popup from './Popup';
import Navbar from './Navbar';
import Logo from './Logo'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div>

          <Route exact path="/" component={Popup}/>
          <Navbar/>
          <Logo/>


      </div>
  </Router>
    );
  }
}

export default App;
