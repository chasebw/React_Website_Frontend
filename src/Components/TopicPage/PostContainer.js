import React, { useState, useEffect } from 'react'
import { SiteSpinner } from '../Spinner/SiteSpinner'
import { PostElement } from './PostElement'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const PostContainer = (props) => {

  const [user, setUser] = useState("Jack Hendry")
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log("Use Effect Called")
    props.postHandler()
  }, [])

    const data1 = [
        {user: "Jack",
        content: "I love it here!",
        time: "April 12, 2021"},
        {user: "Suzie",
        content: "I love it here too!",
        time: "April 12, 2021"},
        {user: "Peeraya",
        content: "I love it here more!",
        time: "April 12, 2021"}
    ]    

        return (
          <div className="post_container">
          {/* {props.posts ?  props.posts.map((post, index) => <PostElement post={post} index={index}/> ) : <SiteSpinner/> } */}
          {data1.map((post, index) => <PostElement post={post} 
          index={index} 
          setEditModalShow={props.setEditModalShow}
          setDeleteModalShow={props.setDeleteModalShow} /> )}
          </div>
        );
}