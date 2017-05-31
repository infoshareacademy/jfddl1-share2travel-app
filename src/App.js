
import React from 'react';
import Karola from'./Karola';
import FavoriteProducts from './FavoriteProducts'
import Comp from './Comp'
import Popup from './Popup'
import Login from './Login'
import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Route} from 'react-router-dom'
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import TopNavigation from './TopNavigation'
// import './store'

const links = [
  { path: '/', label: 'Home' },
  { path: '/Karola', label: 'Wyszukaj' },
  { path: '/FavoriteProducts', label: 'Ulubione' },
]

var isLogged = false;

class App extends React.Component{

  constructor(){
    super();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('USER IS LOGGED IN!');
        isLogged = true;
      } else {
        console.log('USER IS NOT LOGGED IN!');
        isLogged = false;
      }
      this.forceUpdate();
    });
  }


  // constructor(){
  //   super():
  //   firebase.auth().signOut().then(function() {
  //     // Sign-out successful.
  //   }).catch(function(error) {
  //     // An error happened.
  //   });
  // }

  render() {
    return (
      <Router>

        {function(){

          if(isLogged){
            return(
              <div>
                <BurgerMenuWrapper
                  isOpen={this.props.sidebarOpen}
                  toggleSidebar={this.props.toggleSidebar}
                  onStateChange={(state) => this.props.toggleSidebar(state.isOpen)}
                  links={links}
                >
                  <TopNavigation
                    links={links}
                    toggleSidebar={this.props.toggleSidebar}
                  />
                  <Grid>
                    <Row>
                      <Col md={12}>
                        <Route exact path="/"  component={Popup} />
                        <Route path="/Karola" component={Karola}/>
                        <Route path="/Comp" component={Comp}/>
                        <Route path="/products/:productId" component={Comp}/>
                        <Route path="/start" component={Popup}/>
                        <Route path="/FavoriteProducts" component={FavoriteProducts}/>

                      </Col>
                    </Row>
                  </Grid>
                </BurgerMenuWrapper>
              </div>
            )}

          else{
            return(
              <div>
                <Grid>
                  <Row>
                    <Col md={12}>
                      <Route exact path="/"  component={Login} />
                    </Col>
                  </Row>
                </Grid>
              </div>

            )
          }

        }.call(this)}

      </Router>
    )
  }
}
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