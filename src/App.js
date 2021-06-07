import './App.css';
import React from 'react';
import styled from 'styled-components'
import { AccountBox } from './Components/accountBox';
import { Home } from './Components/HomePage/Home'
import { TopicPage } from './Components/TopicPage/TopicPage'
import { ProfilePage } from './Components/ProfilePage/ProfilePage' 
import { pages }  from './Components/data/pages'
import { PostInfoProvider } from './Components/TopicPage/PostContextManager/PostInfoContext'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;


function App() {

  return (
    <Router>
      <Switch>

      {/* Root */}
        <Route exact path="/">
          {/* Login Form */}
          <AppContainer>
            <AccountBox />
          </AppContainer>
          </Route>

        {/* Home Page */}
        <Route path="/home" component={Home} />

        {/* Topic Pages */}
        {pages.map(page => <Route path={`/${page}`} component={ () => 
        <PostInfoProvider>
        <TopicPage page={page} />
        </PostInfoProvider>
        } />  )}

        {/* TODO Delete Below */}
        {/* <Route path="/sports" component={() => <TopicPage page="sports" />} />  */}

        {/* Profile Page */}
        <Route path="/profile" component={() => <ProfilePage/>} /> 
      </Switch>
    </Router>  
  );
}

export default App;