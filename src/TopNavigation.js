import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavItem,
  Glyphicon,
} from 'react-bootstrap'
import {
  IndexLinkContainer
} from 'react-router-bootstrap'



const TopNavigation = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={process.env.PUBLIC_URL + '/favicon.jpg'} height={20} alt=""/></Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {
        props.links.map(
          (link, index) => (
            <IndexLinkContainer
              key={index}
              to={link.path}>
              <NavItem>{link.label}</NavItem>
            </IndexLinkContainer>
          )
        )
      }
      <NavItem onClick={event => {
        event.preventDefault()
        props.toggleSidebar(true)
      }}>
        <Glyphicon glyph="align-right" /> Menu
      </NavItem>
    </Nav>
  </Navbar>
)

export default TopNavigation