import React, { useState } from 'react';


const PostBox = ({}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    return (
        <>
        <div className="createPostBox">
               <label htmlFor="title">Title</label>
               <input
                   type="text"
                   onChange={event => setTitle(event.target.value)}
                   value={title}
               />
               <br></br>
               <label htmlFor="location">Location</label>
               <input
                   type="text"
                   onChange={event => setLocation(event.target.value)}
                   value={location}
               />
               <br></br>
               <label htmlFor="description">Description</label>
               <input
                   id="inputBoxContainer"
                   type="text"
                   onChange={event => setDescription(event.target.value)}
                   value={description}
               />
               <br></br>
               <label htmlFor="price">Price</label>
               <input
                   type="text"
                   onChange={event => setPrice(event.target.value)}
                   value={price}
               />
               <div>
               <br></br>
               <label htmlFor="willDeliver">Will Deliver{" "}</label>
               <input
                   type="checkbox"
                   onClick={() => setWillDeliver(!willDeliver)}
                   value={willDeliver}
               />
               </div>
               <br></br>
               <button type="submit">create</button>
           </div>
        </>
    )
}

export default PostBox;