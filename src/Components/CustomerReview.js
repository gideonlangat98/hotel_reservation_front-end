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


  const showReview = reviews.map((review) =>(
    <ol key={review.id}>
      <p>comment:{review.body}</p>
    </ol>
  ))
  
  return (
    <div>
      {showReview}
      <NewReview onAddReview={handleAddReview}/>
    </div>
  )
}

export default CustomerReview;