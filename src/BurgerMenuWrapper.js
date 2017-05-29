import React from 'react'
import { push as BurgerMenu } from 'react-burger-menu'
// import { Link } from 'react-router-dom'
// importa Ba from './Ba';
import {Image, Button, Label, Glyphicon, Navbar} from 'react-bootstrap'


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

const BurgerMenuWrapper = (props) => (
  <div id="outer-container">
    <BurgerMenu
      right
      onStateChange={props.onStateChange}
      isOpen={props.isOpen}
      styles={styles}
      pageWrapId={ "page-wrap" }
      outerContainerId={ "outer-container" }
    >
      <Image style={divStyle} className="Profile-center" src={process.env.PUBLIC_URL + '/images/profile.png'}/>

      <div>
        <Label bsStyle="default">Edytuj Zdjęcie</Label>&nbsp;
        <Label bsStyle="primary">Edytuj profil</Label>&nbsp;
      </div>

      <div>
        <Label bsStyle="default">Zaloguj się</Label>&nbsp;
        <Label bsStyle="primary">Wyloguj się</Label>&nbsp;
      </div>




      <br/>
      <p style={divStyle}>Karolina Karolina</p>

      <p style={divStyle}>gmail@gmail.com</p>
      <ul>
        <Button id="b1" href="#" bsStyle="primary" bsSize="xsmall">Facbook</Button>
      <Button id="b2" href="#" bsStyle="primary" bsSize="xsmall">Google</Button>
        <Button id="b3 "href="#" bsStyle="primary" bsSize="xsmall">Twiter</Button>

      </ul>
      <p style={divStyle}>Lublin, Poland</p>


        <Navbar.Text className={styles.userMenu}>
          <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
          <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
        </Navbar.Text>





    </BurgerMenu>
    <div id="page-wrap">
      {
        props.children
      }
    </div>
  </div>
)

export default BurgerMenuWrapper

