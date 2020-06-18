import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Departments from "./components/Departments";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import DepartmentView from "./components/DepartmentView";
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>

    <>
        <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/:id" component={DepartmentView} />
          <Route exact component={NoMatch} />
        </Switch>
      </Container>
    </>
    </AppContainer>
  );
}
const AppContainer = styled.div`
  background: linear-gradient(to bottom right, orange, white);
`;
export default App;