import React from 'react'
import {
  Popover,
  Tooltip,
  OverlayTrigger,
  Modal,
  Button
} from 'react-bootstrap'

class Popup extends React.Component {
  state = {
    showModal: false
  }

  close = () => this.setState({ showModal: false })

  open = () => this.setState({ showModal: true })

  render = () => {
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

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Instrukcja
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Tytuł i opis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Nagłówek 2</h4>
            <p>tekst 2</p>

            <h4>bajery</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>bajery2</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Nagłówek</h4>
            <p>Tekst</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Popup