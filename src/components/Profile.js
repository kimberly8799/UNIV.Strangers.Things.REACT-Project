import React from "react";
import { PostDetail } from "."

const Profile = ({
    userData: { posts, messages, active, _id },
    member, token, userData, searchValue, fetchPosts
}) => {

    console.log("profile")
    console.log(userData);

    return (
        <>
            <h1 className="profile">Hello {member}! </h1>
            <h3 style={{ color: "turquoise", marginLeft: "20px" }}>
                <i>Profile</i>
            </h3>

            {/* <div className="search">
            <label htmlFor="search">Search{" "}</label>
            <input
                    type="text"
                    name="search"
                    onChange={handleSearch}
                    value={searchValue}
                />
            </div> */}

            <div className="displayPosts">
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