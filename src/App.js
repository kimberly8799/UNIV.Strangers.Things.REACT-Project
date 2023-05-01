import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getAPI } from './api';

import {
    Posts,
    Profile,
    Account,
    EnterSite,
    Home
} from "./components/index.js"
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



const App = () => {
    //members
    const [token, setToken] = useState(null);
    //new users
    const [member, setMember] = useState(null);
    const [posts, setPosts] = useState([]);


    const fetchPosts = async () => {
        const data = await getAPI({
            path: "/posts",
            token
        });

        console.log(data);

        if (data?.posts) {
            setPosts(data.posts)
        }

        // if (token && !member) {
        //     const data = await getAPI({
        //         path: "/posts",
        //         token
        //     });
        //     if (data.username) {
        //         setMember(data.username);
        //     }
        // }
    }

    useEffect(() => {
        fetchPosts();
        console.log("TOKEN app lvl: " + token)
        console.log("MEMBER app lvl: " + member)
    }, [token])


    return (
        <>
            <Route exact path="/">
                <EnterSite />
            </Route>
            <Route path="/:_">
                {/* show nav for all pages except root page */}
                <nav className="original">
                    <Link to="/">...</Link>
                    <Link to="/homepage">Home</Link>
                    <Link to="/posts">Posts</Link>
                    {
                        token
                            ? <Link to={`/profile/${member}`}>My Account</Link>
                            : null
                    }
                </nav>
            </Route>
            {/* /Enter Site page */}
            <Route path="/homepage">
                <Home />
            </Route>
            {/* /posts */}
            <Route path="/posts">
                <h1>strange things happen here...</h1>
                {posts
                    ? <Posts
                        token={token}
                        member={member}
                        posts={posts}
                        fetchPosts={fetchPosts}
                    />
                    : <strong>No posts to display</strong>
                }
            </Route>
            {/* /profile */}
            <Route path="/profile/:username">
                <Profile
                    member={member}
                    token={token}
                />
            </Route>
            <Route path="/profile">
                <Redirect to={`/profile/${member}`} />
            </Route>
            {/* /register & login */}
            <Route path="/account/:actionType">
                <Account
                    setMember={setMember}
                    setToken={setToken}
                />
            </Route>
        </>
    )
}

export default App;
