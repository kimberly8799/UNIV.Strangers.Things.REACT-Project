import React from 'react';
import { getAPI } from '../api';

const PostsDetails = ({
    posts: { _id, title, price, location,
        description, message, isAuthor, author,
        createdAt, updatedAt, willDeliver },
    member, token, idx,
    fetchPosts
}) => {

    const handleDelete = async () => {
        console.log(_id);
        await getAPI({
            path: `/posts/${_id}`,
            method: 'DELETE',
            token,
        });
        //fetchPosts();
        //onDelete && onDelete()
    }

    return (
        <>
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
                    <h6>By: {author.username}</h6>
                    {isAuthor && <p> this post was created by you</p>}
                    {isAuthor && <button onClick={handleDelete}>Delete</button>}
                    <h6>Created at: {createdAt} |
                        Last update: {updatedAt}
                    </h6>
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export default PostsDetails;