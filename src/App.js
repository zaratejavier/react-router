import React from 'react';
import {Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import NavBar from "./components/NavBar"
import Blog from "./components/Blog"
import BlogShow from "./components/BlogShow"
import {Container} from "semantic-ui-react"


function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/blog/:id" component={BlogShow}/>

          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
