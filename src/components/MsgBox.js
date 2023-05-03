import React from 'react';
// import { createMsg, toggleClass } from './AddMsg';

const MsgBox = ({
    token, show, isShown,
    setIsShown, setMessage

}) => {

    return (
        <>
            {token &&
                <form onSubmit={createMsg} >
                    <div className="hoverArea" id="createMsg">
                        <h3 style={{ color: "lightgreen" }}>
                            <i
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                onClick={toggleClass}
                                value={show}
                            >
                                {  isShown
                                       ? "Click to send a message"
                                       : <label htmlFor="message">Send a message</label>
                                }
                            </i>
                        </h3>

                        {show
                            ? <div className='inputBox' >
                                <input
                                    required
                                    className="addMsg"
                                    id="inputBoxContainer"
                                    type="text"
                                    onChange={event => setMessage(event.target.value)}
                                    value={message}
                                />
                                <button type="submit">send</button>
                            </div>
                            : null
                        }
                        <br></br>
                    </div>
                </form>
            }
        </>
    )
}

export default MsgBox;

