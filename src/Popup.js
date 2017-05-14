import React from 'react'

// import { Popover, Tooltip, Button, Modal, OverlayTrigger, Popup } from 'react-bootstrap'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap'

const Popup = React.createClass({
  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
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
        <p>przycisk spowoduje wyświetlenie instrukcji</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Powitanie

        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Nagłówek</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Nagłówek 2</h4>
            <p>tekst 2</p>

            <h4>Nagłówek 3</h4>
            <p>tekst nagłówka<OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> tu</p>

            <h4>Nagłówek 4</h4>
            <p>tekst nagłówka<OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> tu</p>

            <hr />

            <h4>Samo powitanie</h4>
            <p>Witaj pielgrzymie powodzenia</p>
            <p>Tekst powitania witaj wędrowcze na stronie</p>

            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default Popup

