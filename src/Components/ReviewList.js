import React from 'react'
import Review from './Review';

function ReviewList({onReviewDelete}) {
  return (
    <div>
        <ul>
            {ReviewList.map((review) =>(
                <Review key={review.id} onReviewDelete={onReviewDelete} />
            ))}
        </ul>
    </div>
  );
}

export default ReviewList;