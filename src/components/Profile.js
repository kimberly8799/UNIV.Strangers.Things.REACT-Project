import React from "react";
import { useParams } from 'react-router-dom';
import { PostDetail, Messages, Posts } from "."

const Profile = ({ member, token, fetchPosts }) => {

    return (
        <>
            <h1 className="profile">Hello {member}! </h1>
            <h3>Profile</h3>
            <p>Your Listings:</p>
            {member?.posts && <Posts posts={member.posts}/>}
        
        </>
    )
}


export default Profile;