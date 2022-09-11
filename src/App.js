import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import CustomerReview from './Components/CustomerReview';
import NewReview from './Components/NewReview';
import Review from './Components/Review'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/aboutUs">
          <About />
        </Route>
        <Route exact path="/customerReviews">
        <CustomerReview />
        </Route>
        <NewReview />
        <Review />
      </Switch>
    </div>
  )
}

export default App;
