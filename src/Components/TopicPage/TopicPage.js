import React, {useEffect, useState, useContext} from 'react'
import { SiteNavbar } from '../Navbar/Navbar';
import { PageBanner } from '../PageBanner/PageBanner';
import { Marginer } from "../Marginer/index"
import { PostContainer } from "./PostContainer"
import { AddPostForm } from './AddPostForm';
import { EditModule } from './EditModule';
import { DeleteModule } from './DeletePostModule';
import { PostModalProvider } from './PostModalContext'
import { FeedbackMessageProvider } from './FeedbackMessageContext'
import { FeedbackAlert } from './FeedbackAlert'
import { PaginationLinks } from './PaginationLinks'
import { PostInfoContext } from './PostContextManager/PostInfoContext'

const SERVER = process.env.REACT_APP_SERVER || '/'

export const TopicPage = (props) => {

  const {pageNumber, setTotalPosts, totalPosts} = useContext(PostInfoContext)
  const [posts, setPosts] = useState([])
  const [editModalShow, setEditModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)

  const editPlaceholder =  {name: 'PlaceHolderName', 
  content: 'PlaceHolderContent', 
  post_id: 'placeHolderPostID'}

  const [editPostContent, setEditPostContent] = useState(editPlaceholder)

  const handleCloseEditPost = () => {
    setEditModalShow(false)
    setEditPostContent(editPlaceholder)
  }

  const grabPosts = async () => {
    console.log("Running fetch all posts")
    try {
        let res = await fetch(`${SERVER}posts/AllPosts`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            page: props.page,
            message: "requesting page info",
            pageNumber: pageNumber
          })
        })

        let result = await res.json();
        console.log(result.posts)
        setPosts(result.posts)
        setTotalPosts(result.totalPosts)
      }
  
      catch(e) { 
        console.log(e)
    }
}

// When this element is rendered it will grab posts
useEffect(() => {
  grabPosts()
},[props.page, pageNumber])

        return (
          <>
          <SiteNavbar />
          <Marginer direction="vertical" margin="1.6em"/>
          <PageBanner page={props.page}/>


        <FeedbackMessageProvider>
        <PostModalProvider> {/* Gives the Context of a Single Post*/}

          <AddPostForm page={props.page} refreshPosts={grabPosts}/>
         
           
         <FeedbackAlert/>

          <PostContainer 
          posts={posts}
          setEditModalShow={setEditModalShow}
          setDeleteModalShow={setDeleteModalShow}
          />

          <PaginationLinks/> 
          <Marginer direction="vertical" margin="1em" />   
      
          <EditModule
          show={editModalShow}
          handleModelShow={setEditModalShow}
          onHide={() => handleCloseEditPost()}
          refreshPosts={grabPosts}
          />

          <DeleteModule 
          show={deleteModalShow}
          setDeleteModalShow={setDeleteModalShow} 
          onHide={() => setDeleteModalShow(false)} 
          backdrop="static" 
          keyboard={false}
          handleClose={() => setDeleteModalShow(false)}
          refreshPosts={grabPosts}
          />

        </PostModalProvider>
        </FeedbackMessageProvider>
        </>
        );
}