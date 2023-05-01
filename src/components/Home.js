import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="homepage">
                <h1>Welcome to Stranger Things!</h1>
                <nav className="account">
                    <button className="acc"><Link to="/account/login">Log In</Link></button>
                    <button className="acc"><Link to="/account/register">Register</Link></button>
                </nav>
            </div>
        </>
    )
}

export default Home;