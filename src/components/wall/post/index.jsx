import React from "react"
import CreatePost from "./Create-Post";
import PinnedPost from "./Pinned-Post";
import OtherPost from "./Other-Post";

function Posts() {
    return (
        <div>
            <CreatePost/>
            <PinnedPost/>
            <OtherPost/>
        </div>
    )
}

export default Posts