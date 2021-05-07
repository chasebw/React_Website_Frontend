import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export const DeleteModule = (props) => {
    return (
        <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    );
}