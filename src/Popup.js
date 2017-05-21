import React from 'react'
import {
  Image,
  Modal,
  Button
} from 'react-bootstrap'
import './Login.css';
class Popup extends React.Component {
  state = {
    showModal: true
  }

  close = () => this.setState({ showModal: false })

  open = () => this.setState({ showModal: true })

  render = () => {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //   </Popover>
    // );
    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //   </Tooltip>
    // );

    return (
      <div>

        <Image className="center-block brand-image img-responsive"  responsive src={process.env.PUBLIC_URL + '/images/brand-black.png'}/>
        <br/>
        <Button
            className="btn-submit"
          bsStyle="info"
          bsSize="medium"
          onClick={this.open}
        >
          Instrukcja korzystania z aplikacji
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title >Instrukcja obsługi To Buy | App</Modal.Title>
          </Modal.Header>
          <Modal.Body className="instruction">
            <h4>Cześć,</h4>
              <p>Dziękujemy za wybór aplikacji To Buy.</p>
              <p>Pomożemy Ci w porównywaniu cen i produktów w łatwy i przystępny sposób porównć. Aby to zrobić najpierw Zaloguj się, a następnie przejdź do sekcji Wyszukaj. Znajdziesz je w górnym menu i bocznym menu. </p>
            <p>Życzymy owocnego porównywania i naprawdę tanich zakupów!</p>
            <p>Pamiętaj zawsze możesz tu wrócić.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-blue" bsStyle="info" >Zamknij</Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Popup