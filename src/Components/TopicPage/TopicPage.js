import React, {useEffect, useState} from 'react'
import { SiteNavbar } from '../Navbar/Navbar';
import { PageBanner } from '../PageBanner/PageBanner';
import { Marginer } from "../Marginer/index"
import { PostContainer } from "./PostContainer"
import { AddPostForm } from './AddPostForm';
import { EditModule } from './EditModule';
import { DeleteModule } from './DeletePostModule';
import { useFetch } from './CustomHooks/useFetch';

export const TopicPage = (props) => {

  const [posts, setPosts] = useState([])
  const [editModalShow, setEditModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)


  const editPlaceholder =  {name: 'PlaceHolderName', 
  content: 'PlaceHolderContent', 
  post_id: 'placeHolderPostID'}

  const [editElementIsLoading, setEditElementIsLoading] = useState(false)
  const [editPostContent, setEditPostContent] = useState(editPlaceholder)


  const handleShowEditPost = (id) => {
    setEditElementIsLoading(true)
    setEditModalShow(true)
    grabSinglePost(id)
    setEditElementIsLoading(false)
  }

  const handleCloseEditPost = () => {
    setEditModalShow(false)
    setEditPostContent(editPlaceholder)
  }

  const grabSinglePost = async (id) => {
    console.log(`Grabbing Post with id: ${id}`)
    try {
      let res = await fetch(`/posts/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        query: JSON.stringify({
          name: 'RobotUser137',
          post_id: id
        })
      })

      let result = await res.json()
      console.log(result.post)
      setEditPostContent(result.post)

    }
    catch(e) {
      console.log(e)
      console.log('Error receiving singlePost')
    }

  }

  const grabPosts = async () => {
    console.log("Running fetch all posts")
    try {
        let res = await fetch('/posts/all', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          query: JSON.stringify({
            user: 'RobotUser137',
            message: 'hello Server',
            userid: 3
          })
        })

        let result = await res.json();
        console.log(result.posts)
        setPosts(result.posts)
      }
  
      catch(e) { 
        console.log(e)
    }
}

// When this element is rendered it will grab posts
useEffect(() => {
  grabPosts()
},[])

        return (
          <>
          <SiteNavbar />
          <Marginer direction="vertical" margin="1.6em"/>
          <PageBanner page={props.page}/>
          <AddPostForm refreshPosts={grabPosts}/>
          <PostContainer 
          posts={posts}
          handleShowEditPost={(id) => handleShowEditPost(id)}
          setEditModalShow={() => setEditModalShow(true)}
          setDeleteModalShow={() => setDeleteModalShow(true)}
          />

          <EditModule
          show={editModalShow}
          onHide={() => handleCloseEditPost()}
          editPostContent={editPostContent}
          handleShowEditPost={(id) => handleShowEditPost(id)}
          editElementIsLoading={editElementIsLoading}

          />

          <DeleteModule 
          show={deleteModalShow} 
          onHide={() => setDeleteModalShow(false)} 
          backdrop="static" 
          keyboard={false}
          handleClose={() => setDeleteModalShow(false)}
          />

          </>
        );
}