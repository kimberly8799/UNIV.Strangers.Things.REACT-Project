import React, { useState } from 'react';
import { getAPI } from '../api';

const LoggedIn = ({ fetchPosts, token }) => {
    console.log("first" + token);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState('');

    const createPosts = async (event) => {
        event.preventDefault();
        console.log("here" + token);
        const LoggedPostData = await getAPI({
            path: "/posts",
            method: "POST",
            token,
            body: {
                post: {
                    title,
                    description,
                    price,
                    willDeliver
                }
            }
        });
        console.log("helllooooo?" + LoggedPostData);
        const post = LoggedPostData
        if (post) {
            setTitle('');
            setDescription('');
            setPrice('');
            setWillDeliver('');
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

export default LoggedIn;