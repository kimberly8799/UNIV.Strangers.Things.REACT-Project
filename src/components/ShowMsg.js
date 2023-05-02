import React, { useState } from 'react';

const ShowMsg = ({ messages }) => {
    const [isShown, setIsShown] = useState(false);
    const [show, setShow] = useState(false);

    const toggleClass = () => {
        setShow(!show);
    };

    return (
        <>
            {
                messages.length > 0 && messages.map((message, idx) => ((
                    <div key={idx} className='messages'>
                        <div className="hoverArea">
                            <h3 style={{ color: "lightgreen" }}>
                                <i
                                    id="comments"
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                    onClick={toggleClass}
                                    value={show}
                                >
                                    {isShown ? "Click to view" : ">> Comments"}
                                </i></h3>
                            {show ?
                                < div className="showMsg" onClick={toggleClass} >
                                    <h5 style={{ fontWeight: "800", margin: "10px" }}>
                                        {message.fromUser.username} : <i>{message.content}</i><hr></hr></h5>
                                </div > : null}

                        </div>
                    </div>
                )))

            }
        </>
    )
};

export default ShowMsg;


