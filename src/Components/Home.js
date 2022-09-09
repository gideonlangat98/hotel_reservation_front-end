import React, { useState, useEffect } from 'react'
import hotel from "../images/hotel1.jpg"


function Home() {
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:9292/hotels")
      .then((response) => response.json())
      .then((data) =>{
        setHotels(data)
        console.log(data)
      })
    },[]);

    
    return (
      <div>
        <div className='intro'>
        <div>
          Welcome to ReelWorld. ReelWorld hotel 5 minutes by car from Nairobi CBD. it offers free WIFI and parking.
        </div>
        <div>
        <img src={hotel} alt="hotel1" className="hotel1" style={{width: "700px", height: "700px"}}/>
        </div>
        </div>
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