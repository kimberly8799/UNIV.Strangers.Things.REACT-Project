import React, { useState } from 'react';
import { getAPI } from '../api';

const AddPosts = ({ fetchPosts, token } ) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const createPosts = async (event) => {
        event.preventDefault();
        const LoggedPostData = await getAPI({
            path: "/posts",
            method: "POST",
            token,
            body: {
                post: {
                    title,
                    description,
                    price,
                    willDeliver,
                    location
                }
            }
        });
        console.log("helllooooo?" + LoggedPostData);
        const post = LoggedPostData
        if (post) {
            setTitle('');
            setDescription('');
            setPrice('');
            setWillDeliver(false);
            setLocation('');
            await fetchPosts();
        }
    }
    return (
        <>
            <form onSubmit={createPosts}>
                <div className="createPost">
                <h3>create a new post</h3>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    onChange={event => setLocation(event.target.value)}
                    value={location}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    onChange={event => setPrice(event.target.value)}
                    value={price}
                />
                <label htmlFor="willDeliver">Will Deliver</label>
                <input
                    type="checkbox"
                    onChange={event => setWillDeliver(event.target.value)}
                    value={willDeliver}
                />
                <button type="submit">create</button>
                </div>
            </form>

        </>
    )
}

export default AddPosts;