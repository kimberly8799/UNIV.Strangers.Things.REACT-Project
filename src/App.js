import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import { 
    Posts,
    Profile,
    Account,
} from "./components/index.js"


const App = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("TOKEN: " + token)
    }, [token])


    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link> 
                <Link to="/posts">Posts</Link>
            </nav>

            <Route exact path="/">
                <div className="home">
                    <h1>Hello World . . </h1>
                    <h2>Welcome to Strangers' Things!</h2>
                    <button className="homeEnter">
                        {<Link className="enter" to="/account/login">
                            I solemnly swear I am up to no good...
                        </Link>}
                    </button>
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
            {/* /register & login */}
            <Route path="/account/:actionType">
                <Account token={token} setToken={setToken} />
            </Route>
        </>
    )
}

export default App;
