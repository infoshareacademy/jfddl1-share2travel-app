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
      <h4>tekst</h4>
      <p>tekst</p>



      <hr />

      <h4>tekst</h4>
      <p>tekst</p>

    </GenericPopup>

    <GenericPopup title="2">
      <p>tekst</p>
    </GenericPopup>

    <GenericPopup title="3">
      <form>
        <FormGroup>
          <FormControl placeholder="3"/><Button>stop</Button>
        </FormGroup>
      </form>
    </GenericPopup>
  </div>
)

export default About