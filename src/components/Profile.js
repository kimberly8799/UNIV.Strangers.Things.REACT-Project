import React from "react";
import { useParams } from 'react-router-dom';

const Profile = ({ member }) => {

    return (
        <>
        <h1 className="profile">Hello {member}! </h1>
        <h3>Profile</h3>
        <p>Member information:</p>
        </>
    )
}


export default Profile;