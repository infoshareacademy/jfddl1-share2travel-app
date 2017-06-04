import React from 'react';
import Home from'./Home';
import FavoriteProducts from './FavoriteProducts'
import DetailedView from './DetailedView'
import Popup from './Popup'
import Login from './Login'
import * as firebase from 'firebase';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Grid, Col, Row,} from 'react-bootstrap'
import {connect} from 'react-redux'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import TopNavigation from './TopNavigation'

const links = [
  {path: '/', label: 'Home'},
  {path: '/Home', label: 'Wyszukaj'},
  {path: '/FavoriteProducts', label: 'Ulubione'},
]

var isLogged = false;

class App extends React.Component {

  state = {
    profilePhoto: ''
  }

  constructor() {
    super();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        isLogged = true;
        this.setState({
          profilePhoto: firebase.auth().currentUser.photoURL
        });
      } else {
        isLogged = false;
      }
      this.forceUpdate();
    });
  }


  render() {
    return (
      <Router>

        {function () {

          if (isLogged) {
            return (
              <div>
                <BurgerMenuWrapper
                  profilePhoto={this.state.profilePhoto}
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
                        <Route exact path="/" component={Popup}/>
                        <Route path="/Home" component={Home}/>
                        <Route path="/DetailedView" component={DetailedView}/>
                        <Route path="/products/:productId" component={DetailedView}/>
                        <Route path="/start" component={Popup}/>
                        <Route path="/FavoriteProducts" component={FavoriteProducts}/>

                      </Col>
                    </Row>
                  </Grid>
                </BurgerMenuWrapper>
              </div>
            )
          }

          else {
            return (
              <div>
                <Grid>
                  <Row>
                    <Col md={12}>
                      <Route exact path="/" component={Login}/>
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
  toggleSidebar: (shouldBeOpen) => dispatch({type: 'TOGGLE_SIDEBAR', shouldBeOpen: shouldBeOpen})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)