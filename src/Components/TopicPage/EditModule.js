import React, { useContext } from 'react'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import { PostModalContext } from './PostModalContext'

export const EditModule = (props) => {

    const {singlePostModal, setSinglePostModal, setPostModalIsLoading} = useContext(PostModalContext)

   const handleSubmit = async (event) => {
       event.preventDefault()
       props.onHide()
       const result = await submitEditForm()
       console.log("Result Edit")
       console.log(result)
       if(result.success) 
       {
           props.refreshPosts()
       }
   }

   const submitEditForm = async () => {
    console.log("Running Edit Post")
    try {
        let res = await fetch(`posts/editPost/${singlePostModal._id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: singlePostModal.content,
                time: singlePostModal.time,
            })
        })

        let result = await res.json();
        console.log(result)
        return result
    }

    catch (e) {
        console.log(e)
    }
   }

   const username = singlePostModal.user.username;

    return (
        <Modal
            {...props}
            backdrop="static"
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

            {false ? <Spinner /> :

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User</Form.Label>
                <Form.Control type="text" value={username} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Post_id</Form.Label>
                <Form.Control type="text" value={singlePostModal._id} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" value={singlePostModal.time} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> Content </Form.Label>


                <Form.Control as="textarea" 
                rows={3} 
                value={singlePostModal.content} 
                onChange={(e) =>  setSinglePostModal({...singlePostModal, content: e.target.value})}/> 

            </Form.Group>
        </Form >
        }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={(e) => handleSubmit(e)}> Submit </Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}