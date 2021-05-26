import React, { useState, useContext } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import { useFetch } from './CustomHooks/useFetch'
import { FeedbackMessageContext } from './FeedbackMessageContext'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const AddPostForm = (props) => {

    const {setFeedbackMessage, setFeedbackMessageShow, setFeedbackType} = useContext(FeedbackMessageContext)

    const grabTime = () => {

        const date = new Date()
        const dateString = date.toLocaleDateString()
        const timeString = date.toLocaleTimeString()
        return dateString + ", " + timeString;
    }
    
    const [content, setContent] = useState('')
    const [time, setTime] = useState(grabTime())
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await addPost()
        console.log(result)
        if (result.success) {
            props.refreshPosts()
            setFeedbackMessage(result)
            setFeedbackType(true)
            setFeedbackMessageShow(true)
        }
        else 
        {
            setFeedbackMessage(result)
            setFeedbackType(false)
            setFeedbackMessageShow(true)
        }
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
                    content: content,
                    time: time,
                })
            })

            let result = await res.json();
            setIsLoading(false)
            console.log(result)
            setContent('')
            return result
        }

        catch (e) {
            setIsLoading(false)
            console.log(e)
            setContent('')
            return {success:false, action: "AddPost", error: e}
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
                        placeholder="Write something here ..."
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={content ? false : true}
                    onClick={handleSubmit}>
                    Add Post
            </Button>
            </Form>
            {/* Todo add React boostrap alert if error */}
            {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
        </div>
    );
}


