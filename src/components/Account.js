import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getAPI } from '../api';


const Account = ({ token, setToken }) => {
    const params = useParams();
    const { actionType } = params;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (actionType === "register") {
            const response = await getAPI ({
                method: "POST",
                body: JSON.stringify({
                    user: {
                        username: "this",
                        password: "that"
                    }
                }),
                token
            });
            //setToken(response?.data.token);
            console.log(response);

        } else if (actionType === "login") {
            const data = await getAPI ({
                method: "GET",
                token
            })
            console.log(data);
        }

        
       
    }

    return (
        <>
            <h1>{actionType === "register" ? "Become a member" : "welcome back old friend..."}</h1>
            <p>{actionType === "register" ? "come to the dark side..." : "Login"}</p>
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