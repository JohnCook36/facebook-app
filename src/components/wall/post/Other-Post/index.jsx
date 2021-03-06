import React from "react"
import * as s from "./index.styles"
import OtherHeaderPosts from "../BlockPosts/OtherHeaderPost";
import TextPost from "../BlockPosts/TextPost";
import ActionPost from "../BlockPosts/ActionPost";
import InputPost from "../BlockPosts/InputPost";
import ImgOtherPost from "../BlockPosts/ImgOtherPost";

function OtherPost() {
    return (
        <div>
            <s.TitlePost>
                OTHER POSTS
            </s.TitlePost>

            <s.BlockPost>
                <OtherHeaderPosts/>
                <TextPost/>
                <ImgOtherPost/>
                <ActionPost/>
                <InputPost/>
            </s.BlockPost>
        </div>
    )
}

export default OtherPost