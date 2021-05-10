import React from 'react'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'


const FormBody = (props) => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User</Form.Label>
                <Form.Control type="text" placeholder={props.user} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Post_id</Form.Label>
                <Form.Control type="text" placeholder={props._id} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> Content </Form.Label>
                <Form.Control as="textarea" rows={3} value={props.content}></Form.Control>
            </Form.Group>
        </Form >
    )
}

export const EditModule = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Post
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                {props.editElementIsLoading ? <Spinner /> :

                    <FormBody user={props.editPostContent.user} post_id={props.editPostContent._id} content={props.editPostContent.content} />}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}