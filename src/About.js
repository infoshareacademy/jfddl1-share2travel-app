import React from 'react'
import Popup from './Popup'
import GenericPopup from './GenericPopup'
import {
  Popover,
  Tooltip,
  OverlayTrigger,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap'

const popover = (
  <Popover id="modal-popover" title="popover">
    very popover. such engagement
  </Popover>
);
const tooltip = (
  <Tooltip id="modal-tooltip">
    wow.
  </Tooltip>
);

const About = () => (
  <div>
    <h2>About</h2>
    <Popup/>

    <GenericPopup title="1">
      <h4>Text in a modal</h4>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

      <h4>Popover in a modal</h4>
      <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

      <h4>Tooltips in a modal</h4>
      <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

      <hr />

      <h4>Overflowing text to show scroll behavior</h4>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </GenericPopup>

    <GenericPopup title="1">
      <p>Hello world</p>
    </GenericPopup>

    <GenericPopup title="2">
      <form>
        <FormGroup>
          <FormControl placeholder="3"/><Button>Kaboom</Button>
        </FormGroup>
      </form>
    </GenericPopup>
  </div>
)

export default About