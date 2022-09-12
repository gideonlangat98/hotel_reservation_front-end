import React, { useState, useEffect} from "react";

function HotelForm() {
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
      fetch("https://hotel-backend-app.herokuapp.com/hotels")
      .then((response) => response.json())
      .then((data) =>{
        setHotels(data)
        console.log(data)
      })
    },[]);
  return (
    <div>
        
    { hotels.map((hotel) => (
      <ol id={hotel.id} key={hotel.id} >
      <p>Name: {hotel.name}</p>
      <p>Location:{hotel.location}</p>
      <p>Price: {hotel.price}</p>
      </ol>
  ))}
    </div>
  )
}

export default HotelForm