import React from "react"
import * as s from "./index.styles"
import PinnedHeaderPosts from "../BlockPosts/PinnedHeaderPost";
import TextPost from "../BlockPosts/TextPost";
import ActionPost from "../BlockPosts/ActionPost";
import InputPost from "../BlockPosts/InputPost";


function PinnedPost() {
    return (
        <div>
            <s.TitlePost>
                PINNED POST
            </s.TitlePost>

            <s.BlockPost>
                <PinnedHeaderPosts/>
                <TextPost/>
                <s.PostImg/>
                <ActionPost/>
                <InputPost/>
            </s.BlockPost>
        </div>
    )
}

export default PinnedPost