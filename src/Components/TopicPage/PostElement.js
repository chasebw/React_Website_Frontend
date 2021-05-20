import React, { useContext } from 'react'
import { PostModalContext } from './PostModalContext'


export const PostElement = (props) => {

  const {handleShowModal} = useContext(PostModalContext)

  return (
    <div className="topic_post row" style={{ backgroundColor: "white" }}>
        <div className="col-xs-3 post_image">
          <img src="profile_picture.jpg" style={{maxHeight: "50px", width: "auto"}}></img>
        </div>
        <div class="post_username">
          {props.post.user.username}
        </div>
        <div className="col-xs-3 post_content">
          {props.post.content}
        </div>
        <div className="col-xs-3 post_time">
          Posted: {props.post.time}
          <div class="post_button_div">
          <button onClick={() => handleShowModal(props.post._id, props.setEditModalShow)} className="btn btn-primary post_button">Edit</button>
          <button onClick={() => handleShowModal(props.post._id, props.setDeleteModalShow)} className="btn btn-danger post_button">Delete</button>
        </div>
        </div>
      </div>
  );
}