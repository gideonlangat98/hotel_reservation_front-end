// import React, { useState } from "react";

// function EditMessage({review, onUpdateReview }) {
//   const [ReviewBody, setReviewBody] = useState(review);

//   function handleFormSubmit(e) {
//     e.preventDefault();

//     fetch(`http://localhost:9292/reviews/${review.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         review: ReviewBody,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedReview) => onUpdateReview(updatedReview));
//   }
  
//   return (
//     <form className="edit-review" onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         name="body"
//         autoComplete="off"
//         value={ReviewBody}
//         onChange={(e) => setReviewBody(e.target.value)}
//       />
//       <input type="submit" value="Save" />
//     </form>
//   );
// }

// export default EditMessage;
