import React, { useState, useEffect } from 'react'
import Contact from './Contact';

function Home() {
    const [hotels, setHotels] = useState([]);
    const [reviews, setReviews] = useState([]);
  
  
    useEffect(() => {
      fetch("http://localhost:9292/hotels")
      .then((response) => response.json())
      .then((json) =>{
        setHotels(json)
        console.log(json)
      })
    },[]);

    useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then((response) => response.json())
      .then((data) =>{
        setReviews(data)
      })
    },[]);
    
    const allReviews = reviews.map((review) => {
      return <Contact key={review.id} body={review.body} />
    })
    
    return (
      <div>
          <h1>
            { hotels.map((hotel) => (
                <ol key={hotel.id} >
                Name: {hotel.name},
                Location: {hotel.location},
                Price: {hotel.price}
                </ol>
            ))}
          </h1>
          {allReviews}
      </div>
    )
  }

export default Home;