import React from "react";
import { LoggedIn } from '.';


const Posts = ({ posts, member, token, fetchPosts }) => {
    console.log("post"+token)
    return (
        <>
        {member && <h3>You are logged in</h3> }
            <div>
                {member && <LoggedIn token={token} fetchPosts={fetchPosts} /> }

                {
                    posts
                        ? posts.map(
                            ({ _id, title, price, location,
                                description, message, author,
                                createdAt, updatedAt, willDeliver }, idx) => (
                                <div key={_id ?? idx}>
                                    <div className="posts">
                                        <h3>{title}</h3>
                                        <h3>Location: {location}</h3>
                                        <h3>Price: {price}</h3>
                                    </div>
                                    <p>{description}</p>
                                    <h4>{willDeliver ? "will deliver" : "must be picked up!"}</h4>
                                    {member && <h5>Messages: {message}</h5> }
                                    <div className="timestamp">
                                        {member && <h6>By: {author.username}</h6> }
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