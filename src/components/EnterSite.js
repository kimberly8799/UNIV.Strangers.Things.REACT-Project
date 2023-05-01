import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoBG from '../background/index';

const EnterSite = () => {
    return (
        <>
            <div className='overlay'>
                <VideoBG />
                <div className="home" id="displayEnter">
                    <h1>Hello World . . </h1>
                    <button className="homeEnter">
                        {<Link className="enter" to="/homepage">
                            ENTER HERE.
                        </Link>}
                    </button>
                </div>
            </div>
        </>
    )
}

export default EnterSite;