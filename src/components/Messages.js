import React, { useState } from 'react';
import { getAPI } from '../api';

const Messages = ({ member, token, _id }) => {

    const [messages, setMessages] = useState('');

    const viewMessages = async () => {
        const messageData = await getAPI({
            path: `/posts/${_id}/messages`,
            method: "POST",
            body: {
                message: {
                    content,
                }
            }, token
        });
        console.log(messageData);

        if (viewMessages.message) {
            setMessages(messageData.message.content)
        }
    }


    return (
        <>
           <Messages />
        </>
    )
}

export default Messages;