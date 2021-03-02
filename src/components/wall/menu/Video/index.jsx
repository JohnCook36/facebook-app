import React from "react"
import * as s from "./index.styles";
import videoLike from "../../../../img/png/like.png"

function Video() {
    return (
        <s.Block>
            <s.BlockTitle>
                <h2>Video</h2>
                <s.SeeAll>See all</s.SeeAll>
            </s.BlockTitle>
            <s.VideoBlock>
                <s.VideoImage>
                    <s.VideoTime>0:12</s.VideoTime>
                </s.VideoImage>

                <s.VideoDescription>What is most important to you when
                    semflldsmswrqrqrqr
                </s.VideoDescription>
                <s.VideoRating>
                    <img src={videoLike} alt=""/>
                    <s.LikeValue>3</s.LikeValue>
                </s.VideoRating>
                <s.VideoInfo>
                    <span>88 views</span>
                    <span>4 weeks ago</span>
                </s.VideoInfo>
            </s.VideoBlock>
        </s.Block>
    )
}

export default Video