import React, { useState } from 'react';
import { getAPI } from '../api';

const AddMsg = ({ fetchPosts, token, posts }) => {
    const [message, setMessage] = useState('');

    const [isShown, setIsShown] = useState(false);
    const [show, setShow] = useState(false);

    const toggleClass = () => {
        setShow(!show);
    };

    const createMsg = async (event) => {
        console.log("got here")
        event.preventDefault();
        const msgData = await getAPI({
            path: `/posts/${posts.post._id}/messages`,
            method: "POST",
            body: {
                message: {
                    content,
                }
            }, token
        });
        console.log("adding a message")
        console.log(msgData);

        // if (createMsg.message) {
        //     setMessage(msgData.content)
        // }
        const { message } = msgData;
        if (message) {
            setMessage('')
            await fetchPosts();
        }
    }


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
                                {isShown ? "Click to send a message" : <label htmlFor="message">Send a message</label>}
                            </i></h3>
                        {show ?             
                               <div className='inputBox' > 
                               <input
                                    required
                                    className="addMsg"
                                    id="inputBoxContainer"
                                    type="text"
                                    onChange={event => setMessage(event.target.value)}
                                    value={message}
                                />
                            <button type="submit">send</button> </div>: null
                        }
                        <br></br>
                    </div>
                </form>
            }
        </>
    )
}

export default AddMsg;
