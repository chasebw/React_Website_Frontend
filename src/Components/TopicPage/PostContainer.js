import React, { useState, useEffect } from 'react'
import { SiteSpinner } from '../Spinner/SiteSpinner'
import { PostElement } from './PostElement'

//import { SiteNavbar } from '../Navbar/Navbar';
//import  {Marginer } from "../Marginer/index"

export const PostContainer = (props) => {

  const [user, setUser] = useState("Jack Hendry")
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const grabPosts = async () => {
        setIsLoading(true)
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
            setData(result.posts)
            setIsLoading(false)
            console.log(result.posts)
          }
      
          catch(e) { 
            setIsLoading(false)
            console.log(e)
        }
    }

  useEffect(() => {
    console.log("Use Effect Called")
    grabPosts()
  }, [])

    // const data1 = [
    //     {user: "Jack",
    //     content: "I love it here!",
    //     time: "April 12, 2021"},
    //     {user: "Suzie",
    //     content: "I love it here too!",
    //     time: "April 12, 2021"},
    //     {user: "Peeraya",
    //     content: "I love it here more!",
    //     time: "April 12, 2021"}
    // ]    

        return (
          <div className="post_container">
          {data ?  data.map((post, index) => <PostElement post={post} index={index}/> ) : <SiteSpinner/> }
          {/* {data1.map((post, index) => <PostElement post={post} index={index} /> )} */}
          </div>
        );
}