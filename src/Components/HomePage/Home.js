import React from 'react'

import { SiteNavbar } from '../Navbar/Navbar';
import { PageBanner } from '../PageBanner/PageBanner';
import {Marginer} from "../Marginer/index"
import { TopicPageLinker } from '../TopicPageLinker/TopicPageLinker';

// export class Home extends React.Component {

export const Home = (props) => {

        return (
          <div>
          <SiteNavbar />
          <Marginer direction="vertical" margin="1.6em"/>
          <PageBanner />
          <TopicPageLinker/>
          </div>
        );
}