import React, { useState, useEffect } from 'react'
import NewReview from './NewReview';
import ReviewList from './ReviewList';

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

  function handleDeleteReview(id){
    const updatedReviews = reviews.filter((review) => review.id !== id)
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
      <ReviewList onReviewDelete={handleDeleteReview}/>
    </div>
  )
}

export default CustomerReview;