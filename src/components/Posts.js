import React from "react";
import { AddPosts, PostDetail } from '.';


const Posts = ({
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
                        (post, idx) => (
                            <PostDetail 
                            key={post._id ?? idx} 
                            token={token} 
                            post={post}
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