import React from 'react';
import { getAPI } from '../api'

const EditPost = ({ post }) => {

    const edit = async (event) => {
        const response = await getAPI({
            path: `/posts/${post._id}`,
            method: "PATCH",
            token,
            body: {
                post: {
                    title,
                    description,
                    price,
                    willDeliver,
                    location
                }
            }
        });
    }
    return (
        <>
           
        </>
    )
}

export default EditPost;