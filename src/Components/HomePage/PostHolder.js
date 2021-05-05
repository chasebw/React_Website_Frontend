import React from 'react'
import { SinglePost } from './SinglePost'
import  { PostHolderDiv } from './common'


export const PostHolder = props => {

    
const data = [
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


    //This Does the Fetch command from the database,
    return (
        <div className="postHolderDiv col-xs-6">
        {data.map(post => <SinglePost post={post} />)}
        </div>
    );
} 