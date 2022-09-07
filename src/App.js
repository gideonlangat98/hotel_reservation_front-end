import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
// import Comments from './Components/Comments';
// import CustomerReview from './Components/CustomerReview';

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
        {/* <Route exact path="/comment">
        <Comments  />
        </Route>
        <Route exact path="/customerReview">
        <CustomerReview />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App;
