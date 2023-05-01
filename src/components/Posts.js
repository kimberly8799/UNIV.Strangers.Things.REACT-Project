import React from "react";
import { AddPosts, PostsDetails } from '.';


const Posts = ({
    posts: { _id, },
    posts,
    member,
    token,
    fetchPosts
}) => {

    return (
        <>
            {member && <h3>You are logged in</h3>}
            {member && <AddPosts token={token} fetchPosts={fetchPosts} />}
            <div className="displayPosts">
                {
                    posts.map(
                        (posts, idx) => (
                            <PostsDetails 
                            key={posts._id ?? idx} 
                            token={token} 
                            posts={posts}
                            fetchPosts={fetchPosts} 
                            />
                        )
                    )
                }
            </div>
        </>
    )
}

export default Posts;