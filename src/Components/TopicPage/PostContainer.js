import React, { useState, useEffect } from 'react'
import { SiteSpinner } from '../Spinner/SiteSpinner'
import { PostElement } from './PostElement'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const PostContainer = (props) => {

  //postsAreLoading is prop from parent passed down

        return (
          <div className="post_container">
          {props.posts ?  props.posts.map((post, index) => <PostElement post={post} index={index}
          setEditModalShow={props.setEditModalShow}
          setDeleteModalShow={props.setDeleteModalShow}
          /> ) : <SiteSpinner/> }
          {/* {data1.map((post, index) => <PostElement post={post}  */}
         
          </div>
        );
}