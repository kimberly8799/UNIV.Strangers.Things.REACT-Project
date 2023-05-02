import React, { useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAPI } from '../api';


const Account = ({ setToken, setMember, setUserData }) => {
    const params = useParams();
    const { actionType } = params;
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = {
            user: {
                username,
                password
            }
        }

        //register
        const data = await getAPI({
            path: `/users/${actionType}`,
            method: "POST",
            body: requestBody,
        });
        const { token } = data
    

        //login
        if (token) {
            const data = await getAPI({
                path: "/users/me",
                token
            })

            console.log("USERS/ME - logged in");
            //console.log(data);
            const member = data.username;
            const memberData = data;
            if (member) {
                //clear inputs & reset form
                setUsername('');
                setPassword('');
                setToken(token);
                setMember(member);
                setUserData(memberData);
                history.push(`/profile`);
            }
        }
    }



    return (
        <>
            <br></br>
            <br></br>
            <h1 style={{textAlign: "center"}}>{actionType === "register" ? "Become a member" : "I solemnly swear that I am up to no good..."}</h1>
            <div className="accDisplay">
            <i style={{color: "turquoise", fontWeight: "800"}}><p style={{marginLeft: "20px"}}> {actionType === "register" ? "join the dark side..." : "Login"}</p></i>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        required
                        name="username"
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <br />
                    <label htmlFor="password">Password:{" "}</label>
                    <input
                        required
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <br></br>
                <button type="submit">{actionType === "register" ? "Register" : "Enter"}</button>
                <br></br>
                <br></br>
                {actionType === "register"
                    ? <Link to="/account/login">Already have an account? Log in here.</Link>
                    : <Link to="/account/register">Need an acount? Register here.</Link>
                }

            </form>
            </div>
        </>
    )

}

export default Account;