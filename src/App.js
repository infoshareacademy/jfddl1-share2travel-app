
import React, { Component } from 'react';
import Karola from'./Karola';
import Product from './Product'
// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom'
// import SmartCounter from './SmartCounter'

// import Popup from './Popup';
// import Navbar from './Navbar';
// import Logo from './Logo'


// import './App.css';
import Popup from './Popup'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap'
import { connect } from 'react-redux'

import Home from './Home'
import About from './About'


import BurgerMenuWrapper from './BurgerMenuWrapper'
import TopNavigation from './TopNavigation'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  // { path: '/topics', label: 'Topics' },

]

const App = (props) => (
  <Router>
    <BurgerMenuWrapper
      isOpen={props.sidebarOpen}
      toggleSidebar={props.toggleSidebar}
      onStateChange={(state) => props.toggleSidebar(state.isOpen)}
      links={links}
    >
      <Grid>
        <TopNavigation
          links={links}
          toggleSidebar={props.toggleSidebar}
        />

        <Popup/>

        <Row>
          <Col md={12}>
            <Route exact path="/" component={Karola}/>
            <Route path="/:productId" component={Product}/>
            <Route path="/about" component={About}/>

          </Col>
        </Row>
      </Grid>
    </BurgerMenuWrapper>
  </Router>
)

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.sidebarOpen
})

const mapDispatchToProps = dispatch => ({
  toggleSidebar: (shouldBeOpen) => dispatch({ type: 'TOGGLE_SIDEBAR', shouldBeOpen: shouldBeOpen})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
