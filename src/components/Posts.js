import React, { useState, useEffect } from "react";
import { fetchPosts } from '../api';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetchPosts();
        setPosts(response?.data?.posts);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div>
                <h1 class="posts">strange things happen here...</h1>

                {
                    posts
                        ? posts.map((post, idx) => (
                            <div key={post._id ?? idx}>
                                <h3 class="posts">
                                    {post.title} |
                                    {post.location} |
                                    {post.price}
                                </h3>
                                <p>{post.description}</p>
                                <h4>{post.message}</h4>
                                <br></br>
                                <h6>
                                    {post.username} |
                                    {post.createdAt} |
                                    {post.updatedAt}
                                </h6>
                                <hr></hr>

                            </div>))
                        : <strong>No posts to display</strong>
                }
            </div>
        </>
    )
}


export default Posts;