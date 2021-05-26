import './App.css';
import React from 'react';
import styled from 'styled-components'
import { AccountBox } from './Components/accountBox';
import { Home } from './Components/HomePage/Home'
import { TopicPage } from './Components/TopicPage/TopicPage'

import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

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

        {/* Sports Page */}
        <Route path="/sports" component={() => <TopicPage page="Sports" />} /> 
      </Switch>
    </Router>  
  );
}

export default App;