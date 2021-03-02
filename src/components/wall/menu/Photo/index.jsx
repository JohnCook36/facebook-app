import React from "react"
import * as s from "./index.styles";

function Photo() {
    return (
        <s.Block>
            <s.BlockTitle>
                <h2>Photo</h2>
                <s.SeeAll>See all</s.SeeAll>
            </s.BlockTitle>
            <s.PhotoBlock>
                <s.Image/>
                <s.Image/>
                <s.Image/>
                <s.Image/>
                <s.Image/>
                <s.Image/>
            </s.PhotoBlock>
        </s.Block>
    )
}

export default Photo