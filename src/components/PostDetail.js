import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAPI } from '../api';
import handleSearch, { AddMsg, ShowMsg, PostBox } from '.'


const PostDetail = ({
    post: { _id, title, price, location,
        description, isAuthor, author,
        createdAt, updatedAt, willDeliver,
        messages },
    member, token, idx, userData,
    fetchPosts, posts

}) => {
    const history = useHistory();
    
    const handleDelete = async () => {
        await getAPI({
            path: `/posts/${_id}`,
            method: 'DELETE',
            token,
        });
        fetchPosts();
        //onDelete && onDelete()
    }

    const handleEdit = async () => {
        await getAPI({
            path: `/posts/${_id}`,
            method: "PATCH",
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
    }


    return (
        <>
            <div key={_id ?? idx} className='eachPost'>
                <div className="posts">
                    <h3>{title}</h3>
                    <h3>Location: {location}</h3>
                    <h3>Price: {price}</h3>
                </div>
                <div className="postDetails">
                    <p>{description}</p>
                    <h4>{willDeliver == true ? "will deliver" : "must be picked up!"}</h4>
                    {author.username && <h6>By: {author.username}</h6>}
                    <div className="timestamp">
                        <h6>Created at: {createdAt} |
                            Last update: {updatedAt}
                        </h6>
                    </div>

                    <ShowMsg messages={messages} />
                    {!isAuthor && author.username !== member ?
                        <AddMsg
                            member={member}
                            token={token}
                            fetchPosts={fetchPosts}
                            posts={posts}
                        /> : null}
                </div>

                {isAuthor &&
                    <><button onClick={handleDelete}>Delete</button>
                        <button onClick={(() => (handleDelete() &&
                            history.push(`/posts/${_id}`)
                        ))}
                        >Edit</button>
                    </>

                }
                <div className='delete'>
                    {isAuthor && <p> this post was created by you</p>}
                </div>
            </div>
            <br></br>
            <hr></hr>
        </>
    )
}


export default PostDetail;