import React, { useState } from 'react'

function NewReview({onAddReview}) {
    const [reviewBody, setReviewBody] = useState({
        body: ""
    })

    function handleChange(e){
        setReviewBody({...reviewBody, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                'Content-Type':"application/json",
            },
            body: JSON.stringify({body:reviewBody.body})
    })
           .then(response => response.json())
           .then((data) => {
           onAddReview(data);
           setReviewBody({...reviewBody, body:""})
    })
}
    
  return (
    <div>
        <form className='review-form' onSubmit={handleSubmit}>
            <input 
            type="text"
            name="body"
            placeholder='body'
            value={reviewBody.body}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default NewReview;