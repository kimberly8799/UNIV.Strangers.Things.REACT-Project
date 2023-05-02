import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddPosts, PostDetail } from '.';


const Posts = ({
    posts,
    member,
    token,
    fetchPosts
}) => {


    return (
        <>
            <h3><i style={{ color: "turquoise" }}>
                {member ? "~ You are logged in ~"
                    : "~ Not logged in.. ~"}
            </i></h3>

            <div className="search">
                <div>
                    <label htmlFor="search" style={{ padding: "3px" }}>
                        Search
                    </label>
                    <input
                        type="text"
                        name="search"
                        // onChange={handleSearch}
                        // value={searchValue}
                    />
                </div>
            </div>

            {member && <AddPosts
                token={token}
                fetchPosts={fetchPosts}
            />}



            <div className="displayPosts">
                {
                    posts.map(
                        (post, idx) => (
                            <PostDetail
                                key={post._id ?? idx}
                                token={token}
                                post={post}
                                fetchPosts={fetchPosts}
                            />
                        )
                    )
                }
            </div>

            {/* <div>
                {filteredValue.map(
                    (post, idx) => {
                        <PostDetail
                            key={post._id ?? idx}
                            token={token}
                            post={post}>
                            <Link to={`/posts/${post._id}`}>
                                See more
                            </Link>
                        </PostDetail>
                    }
                )}
            </div> */}
        </>
    )
}

export default Posts;
