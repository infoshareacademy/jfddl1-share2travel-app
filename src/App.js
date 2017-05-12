import React, {Component} from 'react';
import './App.css';

import Popup from './Popup';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Popup}/>
        </Router>
      </div>
    );
  }
}

export default App;
