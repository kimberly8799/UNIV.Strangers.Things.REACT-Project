import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { PostDetail, Messages, Posts } from "."

const Profile = ({
    userData: { posts, messages, active, _id },
    member, token, userData, ID, fetchPosts
}) => {

    console.log("profile")
    console.log(userData);

    return (
        <>
            <h1 className="profile">Hello {member}! </h1>
            <div className="displayPosts">
                <h3 style={{ color: "turquoise" }}><i>Profile</i></h3>
                <p>Your Listings:</p>
                {
                    member &&
                    userData.posts.map((post, idx) => (
                        <div key={post._id ?? idx}>
                            {post.active == !null &&
                                <PostDetail
                                    key={post._id ?? idx}
                                    token={token}
                                    post={post}
                                    fetchPosts={fetchPosts}
                                />
                            }
                        </div>
                    ))
                }
                
                
            </div>

        </>
    )
}


export default Profile;


{/* {
                    member.map(
                        (post, idx) => (
                        
                            <PostDetail 
                            key={post._id ?? idx} 
                            token={token} 
                            post={post}
                            fetchPosts={fetchPosts} 
                            />
                        )
                    )
                } */}


{/* <Posts 
            token={token} 
            member={member} 
            fetchPosts={fetchPosts} 
            posts={userPosts}
            />
                {member?.posts && member.posts.map((post, idx)=>
                (<div key={post.id ?? idx}>{ID}</div>))} */}


{/* {member?._id && <Posts>
            {member.map((_id, idx) => (<div key={_id ?? idx}> 
            <h3>ID : {member.posts}</h3>
            </div>  ))}
            </Posts>}
            </div> */}