import React, { useState } from 'react';
import { getAPI } from '../api';

const AddMsg = ({ member, fetchPosts, token, _id }) => {
    const [message, setMessage] = useState('');

    const createMsg = async () => {
        event.preventDefault();
        const msgData = await getAPI({
            path: `/posts/${_id}/messages`,
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
        const {content} = msgData;
        if (content) {
            setMessage('')
            await fetchPosts();
        }
    }


    return (
        <>
        { token &&
            <form onSubmit={createMsg} >
                <div className="createMsg">
                    <label htmlFor="message">Send a message</label>
                    <input
                        type="text"
                        onChange={event => setMessage(event.target.value)}
                        value={message}
                    />
                <button type="submit">send</button>
                </div>
            </form>
}
        </>
    )
}

export default AddMsg;
