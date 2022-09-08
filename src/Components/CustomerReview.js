import React, { useState, useEffect } from 'react'
import NewReview from './NewReview';

function CustomerReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
    .then((response) => response.json())
    .then((data) =>{
      setReviews(data)
    })
  },[]);

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }
  
  return (
    <div>
      <ul>
            {reviews.map((review) =>(
              <ol id={review.id} key={review.id}>
                <p>comment:{review.body}</p>
              </ol>
            ))}
          </ul>
          <NewReview onAddReview={handleAddReview}/>
    </div>
  )
}

export default CustomerReview;