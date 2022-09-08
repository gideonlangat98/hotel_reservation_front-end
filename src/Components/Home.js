import React, { useState, useEffect } from 'react'

function Home() {
    const [hotels, setHotels] = useState([]);
    
  
  
    useEffect(() => {
      fetch("http://localhost:9292/hotels")
      .then((response) => response.json())
      .then((json) =>{
        setHotels(json)
        console.log(json)
      })
    },[]);
    
    return (
      <div>
          <header>
            { hotels.map((hotel) => (
                <ol id={hotel.id} key={hotel.id} >
                <p>Name: {hotel.name}</p>
                <p>Location:{hotel.location}</p>
                <p>Price: {hotel.price}</p>
                </ol>
            ))}
          </header>
      </div>
    )
  }

export default Home;