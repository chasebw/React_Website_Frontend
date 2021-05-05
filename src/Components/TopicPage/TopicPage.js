import React from 'react'
import { SiteNavbar } from '../Navbar/Navbar';
import { PageBanner } from '../PageBanner/PageBanner';
import { Marginer } from "../Marginer/index"
import { PostContainer } from "./PostContainer"
import { AddPostForm } from './AddPostForm';

export const TopicPage = (props) => {

        return (
          <div>
          <SiteNavbar />
          <Marginer direction="vertical" margin="1.6em"/>
          <PageBanner page={props.page}/>
          <AddPostForm />
          <PostContainer />
          </div>
        );
}