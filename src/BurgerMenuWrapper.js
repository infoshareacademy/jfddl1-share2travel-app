import React from 'react'
import { elastic as BurgerMenu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

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
    fontSize: '1.15em'
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
      {
        props.links.map(
          (link, index) => (
            <Link key={index} to={link.path} onClick={() => props.toggleSidebar(false)}>{link.label}</Link>
          )
        )
      }
    </BurgerMenu>
    <div id="page-wrap">
      {
        props.children
      }
    </div>
  </div>
)

export default BurgerMenuWrapper
