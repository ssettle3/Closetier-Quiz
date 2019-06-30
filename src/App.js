import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Theme } from "./components/Theme";
import { Welcome } from "./components/Welcome";

const Body = styled.div`
  padding: 50px;
`;

class App extends Component {
  state = {
    answers: {},
    email: "",
    name: ""
  };

  render() {
    return (
      <Theme>
        <Router>
          <Header />
          <Body>
            <Switch>
              <Route exact path="/quiz" component={Welcome} />
              <Route exact path="/quiz/questions" component={Quiz} />
              <Redirect from="/" to="/quiz" />
            </Switch>
          </Body>
        </Router>
      </Theme>
    );
  }
}

export default App;
