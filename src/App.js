import React from 'react';
import { Route, Link } from 'react-router-dom';

import { 
    Posts,
    Profile,
    Register,
    Login
} from "./components/index.js"


const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link> 
                <Link to="/posts">Posts</Link>
                <Link to="/account/register">Register</Link> 
                <Link to="/account/login">Login</Link>
            </nav>

            <Route exact path="/">
                <div class="home">
                <h1>Hello World . . </h1>
                <h2>Welcome to Strangers Things!</h2>
                <h4>I solelemly swear I am up to no good...</h4>
                </div>
            </Route>
            {/* /posts */}
            <Route path="/posts">
                <Posts />
            </Route>
            {/* /profile */}
            <Route path="/profile">
                <Profile />
            </Route>
            {/* /register */}
            <Route path="/account/register">
                <Register />
            </Route>
            {/* /login */}
            <Route path="/account/login">
                <Login />
            </Route>
        </>
    )
}

export default App;
