import React, { useContext } from 'react'
import { FeedbackMessageContext } from './FeedbackMessageContext'
import { Alert } from 'react-bootstrap'

export const FeedbackAlert = (props) => {

    const { 
        feedbackMessage,
        setFeedbackMessage,
        feedbackMessageShow,
        setFeedbackMessageShow,
        feedbackSuccess,
        setFeedbackSuccess } = useContext(FeedbackMessageContext)

    return (

    <Alert variant={feedbackSuccess} onClose={() => setFeedbackMessageShow(false)} dismissible show={feedbackMessageShow} className="margined">
        <Alert.Heading>{feedbackSuccess === "success" ? "Successful Action" :  "Oh snap! You got an error!"} 
        </Alert.Heading>
        <p>
        {feedbackMessage.message ?  feedbackMessage.message : "" }.
        </p>
    </Alert>
        
    );
}