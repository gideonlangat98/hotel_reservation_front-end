import React, { useState } from 'react'

function NewReview({onAddReview}) {
    const [body, setBody] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                body: body
            }),
        })
            .then((response) => response.json)
            .then((newReview) => {
                onAddReview(newReview);
                setBody("")
            });
    }
  return (
    <div>
        <form className='review-form' onSubmit={handleSubmit}>
            <input 
            type="text"
            name="body"
            autoComplete='off'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button type={submit}>Send Review</button>
        </form>
    </div>
  );
}

export default NewReview