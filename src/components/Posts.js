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
            {posts.map((post) => <div key={post._id}>{post._id}</div>)}
            <h1>Posts</h1>
            <p>strange things here...</p>
        </>
    )
}


export default Posts;