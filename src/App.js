import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Comments from './Components/Comments';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
     
        <Route exact path="/contactUs">
          <Contact />
        </Route>
        <Comments  />
      </Switch>
    </div>
  );
}

export default App;
