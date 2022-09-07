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
          <h1>
            { hotels.map((hotel) => (
                <ol key = { hotel.id } >
                name: { hotel.name },
                location: { hotel.location },
                price: { hotel.price }
                </ol>
            ))}
          </h1>
      </div>
    )
  }



export default Home;