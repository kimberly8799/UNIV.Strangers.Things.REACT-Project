import React, { useState } from 'react';
import { getAPI } from '../api';

const AddPosts = ({ fetchPosts, token }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);


    const [isShown, setIsShown] = useState(false);
    const [show, setShow] = useState(false);

    const toggleClass = () => {
        setShow(!show);
    };


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
        const { post } = LoggedPostData
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
            <form onSubmit={createPosts} style={{ marginLeft: "20px" }}>
                <div className="createPost">
                    <h3 style={{ color: "lightgreen" }} id="hoverArea">
                        <i
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            onClick={toggleClass}
                            value={show}
                        >
                            {isShown ? "Click to create a post" : ">> Create a post"}
                        </i></h3>
                    {show ?
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
                                onChange={() => setWillDeliver(true)}
                                value={willDeliver}
                            />
                            </div>
                            <br></br>
                            <button type="submit">create</button>
                        </div> : null
                    }
                </div>
            </form >

        </>
    )
}

export default AddPosts;