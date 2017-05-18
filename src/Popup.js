import React from 'react'
import {
  Popover,
  Tooltip,
  // OverlayTrigger,
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
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
      </Tooltip>
    );

    return (
      <div>

        <Button
          bsStyle="info"
          bsSize="medium"
          onClick={this.open}
        >
          Instrukcja korzystania z aplikacji
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title >Witaj Użytkowniku !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrukcja korzystania z aplikacji</h4>
            <p>Aplikcja 'porównywarka cen' pomoże w łatwy i przystępny sposób porównć ceny i produkty.</p>

            <h4>Powodzenia użytkowniku !</h4>
            <p>Pamiętaj zawsze możesz tu wrócić !</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} bsStyle="info" >Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Popup