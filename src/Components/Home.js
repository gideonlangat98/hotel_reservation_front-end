import React from 'react'
import hotel from "../images/hotel1.jpg"
import hotel2 from "../images/hotel2.jpg"


function Home() {
    
    return (
      <div className='bg-page'>
        <div className='intro'>
        <div className='p-home'>
          <img src={hotel2} alt="hotel2" className='hotel2' style={{width: "400px", height: "350px"}}/>
          <p>Welcome to ReelWorld. <br></br>ReelWorld hotel 5 minutes by car from Nairobi CBD. <br></br>it offers free WIFI and parking.</p>
        </div>
        <div>
          <img src={hotel} alt="hotel1" className="hotel1" style={{width: "850px", height: "600px", marginLeft: "3rem"}}/>
        </div>
        </div>
          <div className='footer'>
            <h3>
              My Footer
            </h3>
          </div>
          <div>
            <p className='btm-footer' style={{}}>Copyright@ReelWorldFurnitures. All rights reserved.</p>
          </div>
    </div>
    )
  }

export default Home;