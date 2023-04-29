import React from 'react';
import { Link } from 'react-router-dom';

const EnterSite = () => {
    return (
        <>
            <div className="home">
                <h1>Hello World . . </h1>
                <button className="homeEnter">
                    {<Link className="enter" to="/homepage">
                        I solemnly swear I am up to no good...
                    </Link>}
                </button>
            </div>
        </>
    )
}

export default EnterSite;