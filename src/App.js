import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Comp from './Comp'


class App extends Component {
  render() {
    return (
        <Comp/>

    );
  }
}

export default App;
