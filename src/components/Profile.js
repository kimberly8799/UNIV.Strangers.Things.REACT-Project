import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { PostDetail, Messages, Posts } from "."

const Profile = ({
    userPosts: { active, messages, },
    member, token, userPosts, ID, fetchPosts
}) => {

    console.log("profile")
    console.log(userPosts);
    // const history = useHistory();

    // if (!member) {
    //     history.push('/account/login')
    // }

    return (
        <>
            <h1 className="profile">Hello {member}! </h1>
            <div className="ownPosts">
            <h3>Profile</h3>
            <p>Your Listings:</p>
            
            {
                    userPosts.map(
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


            {/* <Posts 
            token={token} 
            member={member} 
            fetchPosts={fetchPosts} 
            posts={userPosts}
            />
                {member?.posts && member.posts.map((post, idx)=>
                (<div key={post.id ?? idx}>{ID}</div>))} */}

            


            </div>
           
           
           
           
           
           
           {/* {member?._id && <Posts>
            {member.map((_id, idx) => (<div key={_id ?? idx}> 
            <h3>ID : {member.posts}</h3>
            </div>  ))}
            </Posts>}
            </div> */}

        </>
    )
}


export default Profile;