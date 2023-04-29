import React from "react";

const Profile = ({ newUser }) => {
    return (
        <>
        <h1 className="profile">Hello {newUser}! </h1>
        <h3>Profile</h3>
        <p>Member information:</p>
        </>
    )
}


export default Profile;