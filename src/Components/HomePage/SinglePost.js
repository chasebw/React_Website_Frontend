import React from 'react'
import { SinglePostDiv } from './common'


export const SinglePost = props => {

    return (
        <SinglePostDiv>
        <p>Single Post Here!</p>
        <p>User: {props.post.user}</p>
        <p>Content: {props.post.content}</p>
        <p>Time: {props.post.time}</p>
        </SinglePostDiv>
    );
} 