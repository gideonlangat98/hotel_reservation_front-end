import React from 'react'

function Review({review, onDelete}) {
    

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(review));
  }

  // function handleUpdateReview(updatedReview) {
  //   setIsEditing(false);
  //   onUpdateBody(updatedReview);
  // }
  return (
    <li>
      <span>{review.body}</span>
      <button className="remove" onClick={handleDeleteClick} className="del">Delete</button>
    </li>
  )
}

export default Review