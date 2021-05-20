import React, { useState, createContext } from 'react'

export const PostModalContext = createContext();

export const PostModalContextPlaceHolder = {
    user: {username: "usernamePlaceholder", _id: "placeholderID"},
    content: "PlaceHolderContent",
    time: "PlaceHolderTime",
    _id: "PlaceHolderId"
}

export const PostModalProvider = (props) => {

    const [singlePostModal, setSinglePostModal] = useState(PostModalContextPlaceHolder)
    const [postModalIsLoading, setPostModalIsLoading] = useState(true)
    const [ModalShow, setModalShow] = useState(false)

    const handleShowModal = (id, showFunction) => {
        setPostModalIsLoading(true)
        showFunction(true)
        grabSinglePost(id)
        setPostModalIsLoading(false)
    }

    const handleCloseModal = (showFunction) => {
        setSinglePostModal(PostModalContextPlaceHolder)
        showFunction(false)
    }

    // TODO convert to a custom Hook?
    const grabSinglePost = async (id) => {
        console.log(`Grabbing Post with id: ${id}`)
        setPostModalIsLoading(true)
        try {
          let res = await fetch(`/posts/${id}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            query: JSON.stringify({
              post_id: id
            })
          })
    
          let result = await res.json()
          console.log(result.post)
          setSinglePostModal(result.post)
          console.log("Just Set ModalContent")
          setPostModalIsLoading(false)
        }
        catch(e) {
          console.log(e)
          console.log('Error retrieving singlePost')
          setPostModalIsLoading(false)
        }
      }

    return(
        <PostModalContext.Provider 
        value={{grabSinglePost: (id) => grabSinglePost(id), 
            singlePostModal,
            setSinglePostModal,
            postModalIsLoading,
            setPostModalIsLoading,
            handleShowModal,
            handleCloseModal
            }}>

            {props.children}
        </PostModalContext.Provider>

    );
}