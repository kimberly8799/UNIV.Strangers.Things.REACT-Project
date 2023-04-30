import React from "react";
import { AddPosts } from '.';


const Posts = ({
    posts: { _id, },
    posts,
    member,
    token,
    fetchPosts
}) => {

    const handleDelete = async () => {
        await getAPI({
            path: `/posts/${posts._id}`,
            mathod: 'DELETE',
            token,
        });
        //onDelete && onDelete()
    }








    return (
        <>
            {member && <h3>You are logged in</h3>}
            {member && <AddPosts token={token} fetchPosts={fetchPosts} />}
            <div>
                {
                    posts.map(
                        ({ _id, title, price, location,
                            description, message, isAuthor, author,
                            createdAt, updatedAt, willDeliver }, idx) => (
                            <div key={_id ?? idx}>
                                <div className="posts">
                                    <h3>{title}</h3>
                                    <h3>Location: {location}</h3>
                                    <h3>Price: {price}</h3>
                                </div>
                                <p>{description}</p>
                                <h4>{willDeliver ? "will deliver" : "must be picked up!"}</h4>
                                {member && <h5>Messages: {message}</h5>}
                                <div className="timestamp">
                                    {member && <h6>By: {author.username}</h6>}
                                    {token && <p>{isAuthor} this post was created by you</p>}
                                    <h6>Created at: {createdAt} |
                                        Last update: {updatedAt}
                                    </h6>
                                </div>
                                <hr></hr>
                            </div>)
                    )
                }
            </div>
        </>
    )
}


export default Posts;