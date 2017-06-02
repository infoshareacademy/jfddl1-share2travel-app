import React from 'react'
import { push as BurgerMenu } from 'react-burger-menu'
import Popap2 from './Popap2'
import PPopap2 from './PPopap2'
import * as firebase from 'firebase';

import {Image, Button, Navbar, Glyphicon} from 'react-bootstrap'



const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '100vh',
    right: '0',
    top: '0'
  },
  bmBurgerBars: {
    background: 'transparent'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#000'
  },
  bmMenu: {
    background: '#DDD',
    padding: '2.5em 1.5em 0',
    fontSize: '1.5em'
  },
  bmMorphShape: {
    fill: '#DDD'
  },
  bmItemList: {
    color: '#DDD',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
const divStyle = {
  width:'100%',
  height:'auto',
  margin:'auto',
  color:'black'
};


class BurgerMenuWrapper extends React.Component {

  logout = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    })
  }
  render () {
    return (

      <div id="outer-container">
        <BurgerMenu
          right
          onStateChange={this.props.onStateChange}
          isOpen={this.props.isOpen}
          styles={styles}
          pageWrapId={ "page-wrap" }
          outerContainerId={ "outer-container" }
        >
          <Image style={divStyle} className="Profile-center" src={process.env.PUBLIC_URL + '/images/profile.png'}/>

          <PPopap2/>
          <Popap2/>


          <br/>
          <li style={divStyle}>Karolina Karolina</li>


          <ul>
            <Button id="b1" href="https://www.facebook.com/" bsStyle="primary" bsSize="xsmall">Facbook</Button>
            <Button id="b2" href="https://www.gmail.com/" bsStyle="primary" bsSize="xsmall">Google</Button>
            <Button id="b3" href="https://www.twitter.com/" bsStyle="primary" bsSize="xsmall">Twiter</Button>

          </ul>
          <li style={divStyle}>Lublin, Poland</li>


          <Navbar.Text className={styles.userMenu}>

            {/*<Navbar.Link href="/" onClick={this.logout}><Glyphicon glyph="log-out"/></Navbar.Link>*/}
          </Navbar.Text>


   }

        </BurgerMenu>
        <div id="page-wrap">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}

export default BurgerMenuWrapper
