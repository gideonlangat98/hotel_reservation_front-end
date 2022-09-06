import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import OurRooms from './Components/OurRooms';
import About from './Components/About';
import Restaurant from './Components/Restaurant';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutUs">
          <About />
        </Route>
        <Route exact path="/ourRooms">
          <OurRooms />
        </Route>
        <Route exact path="/restaurant">
          <Restaurant />
        </Route>
        <Route exact path="/contactUs">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
