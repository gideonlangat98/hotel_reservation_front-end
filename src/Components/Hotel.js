// import React, { useState, useEffect} from 'react'
// import HotelForm from './HotelForm';

// function Hotel() {
//     const [hotels, setHotels] = useState([]);
    
//     useEffect(() => {
//       fetch("http://localhost:9292/hotels")
//       .then((response) => response.json())
//       .then((data) =>{
//         setHotels(data)
//         console.log(data)
//       })
//     },[]);

//   //   { hotels.map((hotel) => (
//   //     <ol id={hotel.id} key={hotel.id} >
//   //     <p>Name: {hotel.name}</p>
//   //     <p>Location:{hotel.location}</p>
//   //     <p>Price: {hotel.price}</p>
//   //     </ol>
//   // ))}

    
//   return (
//     <div>
//       {hotels.map((hotel) => (
//           <HotelForm id={hotel.id} key={hotel.id} hotel={hotel} />
//         ))}
//     </div>
//   )
// }

// export default Hotel