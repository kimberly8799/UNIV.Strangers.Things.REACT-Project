import React from 'react';
import { Link } from 'react-router-dom';
import { getAPI } from '../api';
import { AddMsg, ShowMsg } from '.'


const PostDetail = ({
    post: { _id, title, price, location,
        description, isAuthor, author,
        createdAt, updatedAt, willDeliver,
        messages },
    member, token, idx, userData,
    fetchPosts,

}) => {

    const handleDelete = async () => {
        await getAPI({
            path: `/posts/${_id}`,
            method: 'DELETE',
            token,
        });
        fetchPosts();
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
                <div className="postDetails">
                    <p>{description}</p>
                    <h4>{willDeliver == true ? "will deliver" : "must be picked up!"}</h4>

                    <div className="timestamp">
                        {author.username && <h6>By: {author.username}</h6>}
                        {isAuthor && <p> this post was created by you</p>}
                        {isAuthor && <button onClick={handleDelete}>Delete</button>}
                        <h6>Created at: {createdAt} |
                            Last update: {updatedAt}
                        </h6>
                    </div>
                    <div className='msgContainer'></div>
                    <ShowMsg messages={messages} />
                    { !isAuthor && author.username !== member ?
                        <AddMsg 
                            member={member} 
                            token={token} 
                            fetchPosts={fetchPosts} 
                        /> : null }
                    </div>
                </div>
                <hr></hr>
        </>
    )
}

export default PostDetail;