import React, {useState} from 'react'
import { SiteNavbar } from '../Navbar/Navbar';
import { PageBanner } from '../PageBanner/PageBanner';
import { Marginer } from "../Marginer/index"
import { PostContainer } from "./PostContainer"
import { AddPostForm } from './AddPostForm';
import { EditModule } from './EditModule';
import { DeleteModule } from './DeletePostModule';

export const TopicPage = (props) => {

  const [posts, setPosts] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)

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

        return (
          <div>
          <SiteNavbar />
          <Marginer direction="vertical" margin="1.6em"/>
          <PageBanner page={props.page}/>
          <AddPostForm refreshPosts={grabPosts}/>
          <PostContainer postHandler={grabPosts} 
          posts={posts} 
          setEditModalShow={() => setEditModalShow(true)}
          setDeleteModalShow={() => setDeleteModalShow(true)}
          />

          <EditModule
          show={editModalShow}
          onHide={() => setEditModalShow(false)} />

          <DeleteModule 
          show={deleteModalShow} 
          onHide={() => setDeleteModalShow(false)} 
          backdrop="static" 
          keyboard={false}
          handleClose={() => setDeleteModalShow(false)}
          handleClose={() => setDeleteModalShow(false)}
          />

          </div>
        );
}