import React from 'react';
import { Route, Link } from 'react-router-dom';

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
                <h1>Hello World</h1>
                <h2>Welcome to Strangers Things!</h2>
                <p>I solelemly swear I am up to no good...</p>
            </Route>
            {/* /posts */}
            <Route path="/posts">
                <h1>Posts</h1>
            </Route>
            {/* /profile */}
            <Route path="/profile">
                <h1>Profile</h1>
            </Route>
            {/* /register */}
            <Route path="/account/register">
                <h1>Sign up here</h1>
            </Route>
            {/* /login */}
            <Route path="/account/login">
                <h1>Login</h1>
            </Route>
        </>
    )
}

export default App;
