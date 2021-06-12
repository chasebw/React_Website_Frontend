import React, { useState, useContext } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import { FeedbackMessageContext } from './FeedbackMessageContext'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const AddPostForm = (props) => {

    const { setFeedbackMessage, setFeedbackMessageShow, setFeedbackType } = useContext(FeedbackMessageContext)

    const grabTime = () => {

        const date = new Date()
        const dateString = date.toLocaleDateString()
        const timeString = date.toLocaleTimeString()
        return dateString + ", " + timeString;
    }

    const [content, setContent] = useState('')
    const [time, setTime] = useState(grabTime())
    const [isLoading, setIsLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await addPost()
        console.log(result)
        if (result.success) {
            props.refreshPosts()
            setFeedbackMessage(result)
            setFeedbackType(true)
            setFeedbackMessageShow(true)
            event.target.reset()
            setSelectedFile(null)
            document.getElementById("fileInput").value = ""
        }
        else {
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

        const formData = new FormData()
        formData.append("page", props.page)
        formData.append("postImage", selectedFile ? selectedFile : null)
        formData.append("content", content)
        formData.append("time", time)

        try {
            let res = await fetch('/posts/addPost', {
                method: 'POST',
                body: formData
            })

            console.log("Form Data")
            console.log(formData)

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
            return { success: false, action: "AddPost", error: e }
        }
    }

    return (
        <div className="add_post_form_container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ color: 'white' }}>Add a post here: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        onChange={(event) => setContent(event.target.value)}
                        value={content ? content : ''}
                        placeholder="Write something here ..."
                    />
                </Form.Group>
                <Form.Group controlId="fileInput" className="choose_file">
                  <input type="file" name="postImage" onChange={(e) => {setSelectedFile(e.target.files[0])}}/>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={content ? false : true}
                    >
                    Add Post
            </Button>
            </Form>
            {/* Todo add React boostrap alert if error */}
            {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
        </div>
    );
}


