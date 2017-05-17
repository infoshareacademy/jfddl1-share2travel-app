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
    showModal: true
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
            <Modal.Title>Witaj Użytkowniku</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrukcja korzystania z aplikacji</h4>
            <p>Aplikcja 'porównywarka cen' pomoże w łatwy i przystępny sposób porównć cenyi produkty</p>

            <h4>Powodzenia wędrowcze</h4>
            <p>Pamiętaj zawsze możesz tu wrócić !</p>

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