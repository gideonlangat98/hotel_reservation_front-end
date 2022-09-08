import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import CustomerReview from './Components/CustomerReview';
import Review from './Components/Review';

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
        <Route exact path="/customerReviews">
        <CustomerReview />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
