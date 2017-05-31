import React from 'react'
import { push as BurgerMenu } from 'react-burger-menu'
import Popap2 from './Popap2'
import PPopap2 from './PPopap2'

// import { Link } from 'react-router-dom'
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
          {/*<Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>*/}
          <Navbar.Link href="./Login.js"><Glyphicon glyph="log-out"/></Navbar.Link>
        </Navbar.Text>


      {/*<button class="btn btn-success"><i class="fa fa-edit m-right-xs"></i>Edit Profile</button>*/}

        {/*<Button onClick={()=> this.setState({ open: !this.state.open })}>*/}
          {/*click*/}
        {/*</Button>*/}
        {/*<Fade in={this.state.open}>*/}
          {/*<div>*/}
            {/*<Well>*/}
              {/*Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.*/}
              {/*Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.*/}
            {/*</Well>*/}
          {/*</div>*/}
        {/*</Fade>*/}
      {/*<div>*/}


        {/*<li class="m-top-xs">*/}
          {/*<i class="fa fa-external-link user-profile-icon"></i>*/}
          {/*<a href="http://www.kimlabs.com/profile/" target="_blank">www.kimlabs.com</a>*/}
        {/*</li>*/}

      {/*</div>*/}

    </BurgerMenu>
    <div id="page-wrap">
      {
        props.children
      }
    </div>
  </div>
)

export default BurgerMenuWrapper
