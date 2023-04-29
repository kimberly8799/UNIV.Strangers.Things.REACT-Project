import React, { useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAPI } from '../api';


const Account = ({ setToken, setNewUser }) => {
    const params = useParams();
    const { actionType } = params;
    console.log(params);
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
        console.log("account " + token)
    

        //login
        if (token) {
            const data = await getAPI({
                path: "/users/me",
                token
            })

            const member = data.username;
            console.log(data.username);
            if (member) {
                setUsername('');
                setPassword('');
                setToken(data.token);
                setNewUser(member);
                history.push('/profile');
            }
        }
    }



    return (
        <>
            <h1>{actionType === "register" ? "Become a member" : "welcome back old friend..."}</h1>
            <p>{actionType === "register" ? "join the dark side..." : "Login"}</p>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        required
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">{actionType === "register" ? "Register" : "Enter"}</button>
                <br></br>
                {actionType === "register"
                    ? <Link to="/account/login">Already have an account? Log in here.</Link>
                    : <Link to="/account/register">Need an acount? Register here.</Link>
                }

            </form>

        </>
    )

}

export default Account;