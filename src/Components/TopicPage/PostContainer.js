import React, { useState, useEffect } from 'react'
import { SiteSpinner } from '../Spinner/SiteSpinner'
import { PostElement } from './PostElement'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const PostContainer = (props) => {

  //postsAreLoading is prop from parent passed down

    const data1 = [
        {user: "Jack",
        content: "I love it here!",
        time: "April 12, 2021"},
        {user: "Susie",
        content: "I love it here too!",
        time: "April 12, 2021"},
        {user: "Peeraya",
        content: "I love it here more!",
        time: "April 12, 2021"}
    ]    

        return (
          <div className="post_container">
          {props.posts ?  props.posts.map((post, index) => <PostElement post={post} index={index}
          handleShowEditPost={props.handleShowEditPost}
          setDeleteModalShow={props.setDeleteModalShow}
          /> ) : <SiteSpinner/> }
          {/* {data1.map((post, index) => <PostElement post={post}  */}
         
          </div>
        );
}