import React, { useState } from 'react'

function NewReview({onAddReview}) {
    const [formData, setFormData] = useState({
        body: ""
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({body:formData.body})
    })
           .then(response => response.json())
           .then((data) => {
           onAddReview(data)
           setFormData({...formData,body:""})
    })
}
    
  return (
    <div>
        <form className='review-form' onSubmit={handleSubmit}>
            <input type="text" name="body" placeholder='body' value={formData.body} onChange={handleChange} />
            {/* <input type="text" name="price" placeholder='price' value={formData.price} onChange={handleChange} />
            <input type="text" name="location" placeholder='location' value={formData.location} onChange={handleChange} /> */}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NewReview;