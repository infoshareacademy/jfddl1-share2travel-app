import React from 'react'
import {
  Image,
  Modal,
  Button,
  ButtonToolbar,
} from 'react-bootstrap'

class Popap2 extends React.Component {
  state = {
    showModal: false
  }

  close = () => this.setState({ showModal: false })

  open = () => this.setState({ showModal: true })

  render = () => {

    return (
      <div>

        <Image className="center-block brand-image"  />
        <br/>
        <Button
          bsStyle="info"
          bsSize="medium"
          onClick={this.open}
        >
          Zmień zdjęcie profilowe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title >Edytuj zdjęcie profilowe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<h4>Instrukcja korzystania z aplikacji</h4>*/}
            {/*<p>Aplikcja ToBuy pomoże w łatwy i przystępny sposób porównć ceny i produkty.</p>*/}

            {/*<h4>Powodzenia użytkowniku !</h4>*/}
            {/*<p>Pamiętaj zawsze możesz tu wrócić !</p>*/}

            <ButtonToolbar>
            <Button bsStyle="primary">Edytuj zdjęcie</Button>
              <Button bsStyle="warning">Załaduj zdjęcie</Button>
            </ButtonToolbar>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} bsStyle="info" >Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Popap2