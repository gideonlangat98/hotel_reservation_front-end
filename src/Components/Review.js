import React from 'react'

function Review({review, onDelete}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(review));
  }
  return (
    <div>
      <span>{review.body}</span>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
      <p></p>
    </div>
  )
}

export default Review