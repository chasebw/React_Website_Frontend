import React, { useState, useEffect, useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { PostModalContext } from './PostModalContext'

export const DeleteModule = (props) => {

  const { singlePostModal, handleCloseModal } = useContext(PostModalContext)

  const submitDeleteForm = async () => {
    console.log("Running Edit Post")
    try {
        let res = await fetch(`posts/deletePost`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: singlePostModal.user,
                content: singlePostModal.content,
                time: singlePostModal.time,
                id: singlePostModal._id
            })
        })

        let result = await res.json();
        handleCloseModal(props.setDeleteModalShow)
        // TODO add success banner in context
        props.refreshPosts()  

        console.log(result)
    }

    catch (e) {
        console.log(e)
    }
   }

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
        <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User</Form.Label>
                <Form.Control type="text" value={singlePostModal._id} readOnly />
            </Form.Group>
          Are you sure you want to delete this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal(props.setDeleteModalShow)}>
            Cancel
          </Button>
          <Button variant="danger" disabled={false} onClick={() => submitDeleteForm()}> Delete </Button>
        </Modal.Footer>
      </Modal>
    )
}