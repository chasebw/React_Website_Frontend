import React, { useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'

// import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const AddPostForm = (props) => {

    const grabTime = () => {

        const date = new Date()
        const dateString = date.toLocaleDateString()
        const timeString = date.toLocaleTimeString()
        return dateString + ", " + timeString;
    }

    const [content, setContent] = useState('')
    const [user, setUser] = useState('RobotUser137')
    const [time, setTime] = useState(grabTime())
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)


    const handleSubmit = (event) => {
        addPost()
        event.preventDefault()
    }

    const addPost = async () => {
        setIsLoading(true)
        console.log("Running Add Post")
        setTime(grabTime())

        if (!content) {
            return;
        }

        try {
            let res = await fetch('/posts/addPost', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    content: content,
                    time: time
                })
            })

            let result = await res.json();
            setIsLoading(false)
            console.log(result)
        }

        catch (e) {
            setIsLoading(false)
            console.log(e)
        }
    }

    return (
        <div className="add_post_form_container">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{color:'white'}}>Add a post here: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        onChange={(event) => setContent(event.target.value)}
                        value={content ? content : ''}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={buttonDisabled}
                    onClick={handleSubmit}>
                    Add Post
            </Button>
            </Form>
            {/* Todo add React boostrap alert if error */}
            {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
        </div>
    );
}


