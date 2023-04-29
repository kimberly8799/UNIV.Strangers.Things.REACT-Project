import React, { useState, useEffect } from "react";
import { getAPI } from '../api';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const data = await getAPI({
            path: "/posts",
        });

        console.log(data);
        
        if (data?.posts) {
            setPosts(data.posts)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div>
                <h1 className="posts">strange things happen here...</h1>

                {
                    posts
                        ? posts.map(
                            ({ _id, title, price, location,
                                description, message, username,
                                createdAt, updatedAt }, idx) => (
                                <div key={_id ?? idx}>
                                    <div className="posts">
                                        <h3>{title}</h3>
                                        <h3>Location: {location}</h3>
                                        <h3>Price: {price}</h3>
                                    </div>
                                    <p>{description}</p>
                                    <h5>Messages: {message}</h5>
                                    <div className="timestamp">
                                        <h6>By: {username}</h6>
                                        <h6>Created at: {createdAt} |
                                            Last update: {updatedAt}
                                        </h6>
                                    </div>
                                    <hr></hr>
                                </div>)
                        ) : <strong>No posts to display</strong>
                }
            </div>
        </>
    )
}


export default Posts;