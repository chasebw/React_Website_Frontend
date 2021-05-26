import React, { useState, createContext } from 'react'

export const FeedbackMessageContext = createContext();

export const FeedbackMessageProvider = (props) => {

    const [feedbackMessage, setFeedbackMessage] = useState({action:"someAction", message: ""})
    const [feedbackMessageShow, setFeedbackMessageShow] = useState(false)
    const [feedbackSuccess, setFeedbackSuccess] = useState()

    const setFeedbackType = (value) => {
        if(value === true)
        {
            setFeedbackSuccess("success")
            return
        }
            setFeedbackSuccess("danger")
    }

    return(
        <FeedbackMessageContext.Provider 
        value={{
        feedbackMessage,
        setFeedbackMessage,
        feedbackMessageShow,
        setFeedbackMessageShow,
        feedbackSuccess,
        setFeedbackSuccess,
        setFeedbackType
        }}>

            {props.children}
        </FeedbackMessageContext.Provider>
    );
}