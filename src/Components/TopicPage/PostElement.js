import React from 'react'
// import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const PostElement = (props) => {

  return (
    <div className="topic_post row" style={{ backgroundColor: "white" }}>
        <div className="col-xs-3 post_image">
          <img src="profile_picture.jpg" style={{maxHeight: "50px", width: "auto"}}></img>
        </div>
        <div class="post_username">
          {props.post.user}
        </div>
        <div className="col-xs-3 post_content">
          {props.post.content}
        </div>
        <div className="col-xs-3 post_time">
          Posted: {props.post.time}
        </div>
      </div>
  );
}