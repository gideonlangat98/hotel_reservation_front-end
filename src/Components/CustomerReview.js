import React, { useEffect, useState } from 'react'

function CustomerReview() {
  const [customer_reviews, setCustomeReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/customer_reviews")
    .then((response) => response.json())
    .then((data) =>{
      setCustomeReviews(data)
      console.log(data)
    })
  }, []);

  const hotelReviews = customer_reviews.map((customer_review) =>{
    return <Comments key={customer_review.id} comment={customer_review.comment} />
  })

  return (
    <div>
      {hotelReviews}
    </div>
  )

}

export default CustomerReview