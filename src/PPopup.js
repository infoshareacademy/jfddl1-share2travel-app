/**
 * Created by piotrgolianek on 15.05.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { Button, Modal, Glyphicon} from 'react-bootstrap'

const Popup = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.content}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={this.props.onHide} className="btn-submit">
            Zamknij <Glyphicon glyph="remove-circle"/>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default Popup;