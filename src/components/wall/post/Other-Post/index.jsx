import React from "react"
import * as s from "./index.styles"
import world from "../../../../img/png/world.png"
import ellipsis from "../../../../img/svg/ellipsis.svg"
import like from "../../../../img/smiley/like.png"
import smile2 from "../../../../img/smiley/smile-2.png"
import smile3 from "../../../../img/smiley/smile-3.png"
import smile4 from "../../../../img/smiley/smile-4.png"
import smile5 from "../../../../img/smiley/smile-5.png"
import smile6 from "../../../../img/smiley/smile-6.png"
import smile7 from "../../../../img/smiley/smile-7.png"
import hotLike from "../../../../img/svg/hot-like.svg"
import comment from "../../../../img/svg/comment.svg"
import share from "../../../../img/svg/share.svg"
import smiley from "../../../../img/svg/smiley.svg"
import photos from "../../../../img/svg/photos.svg"
import gif from "../../../../img/svg/gif.svg"
import sticker from "../../../../img/svg/sticker.svg"
import {ActionName} from "../Create-Post/index.styles";

function PinnedPost() {
    return (
        <div>
            <s.TitlePost>
                OTHER POSTS
            </s.TitlePost>

            <s.BlockPost>
                <s.HeaderPost>
                    <s.PostInfo>
                        <s.PostAvatar/>
                        <s.AuthorInfo>
                            <p>
                                <s.AuthorName>Name</s.AuthorName>
                            </p>

                            <s.PostDate>11 hrs <img src={world} alt=""/></s.PostDate>
                        </s.AuthorInfo>
                    </s.PostInfo>

                    <s.OtherAction>
                        <s.Icon src={ellipsis} alt=""/>
                    </s.OtherAction>
                </s.HeaderPost>

                <s.PostText>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </p>
                </s.PostText>

                <s.PostImg>
                    <s.Post>
                        <s.Img/>
                        <s.TitleBox>
                            <s.ImgTitle>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting.
                            </s.ImgTitle>

                            <s.ImgSubtitle>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Laboriosam, numquam!
                            </s.ImgSubtitle>
                        </s.TitleBox>
                    </s.Post>

                    <s.Post>
                        <s.Img/>
                        <s.TitleBox>
                            <s.ImgTitle>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting.
                            </s.ImgTitle>

                            <s.ImgSubtitle>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Laboriosam, numquam!
                            </s.ImgSubtitle>
                        </s.TitleBox>
                    </s.Post>
                </s.PostImg>
                <s.PostAction>
                    <s.ActionsComments>
                        <s.Smile>
                            <img src={like} alt=""/>
                            <img src={smile2} alt=""/>
                            <img src={smile3} alt=""/>
                            <img src={smile4} alt=""/>
                            <img src={smile5} alt=""/>
                            <img src={smile6} alt=""/>
                            <img src={smile7} alt=""/>
                            <s.SmileDescription>
                                <span>Joe Soap and 40 others</span>
                                <span>3 comment 3 share</span>
                            </s.SmileDescription>
                        </s.Smile>
                    </s.ActionsComments>
                </s.PostAction>

                <s.Actions>
                    <s.ActionIcon>
                        <img src={hotLike} alt=""/>
                        <ActionName>Like</ActionName>
                    </s.ActionIcon>

                    <s.ActionIcon>
                        <img src={comment} alt=""/>
                        <ActionName>Comment</ActionName>
                    </s.ActionIcon>

                    <s.ActionIcon>
                        <img src={share} alt=""/>
                        <ActionName>Share</ActionName>
                    </s.ActionIcon>
                </s.Actions>

                <s.InputComment>
                    <s.Relevant>Most relevant</s.Relevant>
                    <s.InputBlock>
                        <s.AvatarComment/>
                        <s.InputBox>
                            <s.InputTxt placeholder="Write a comment..."/>

                            <s.InputButtons>
                                <s.InputBtn>
                                    <img src={smiley} alt=""/>
                                </s.InputBtn>

                                <s.InputBtn>
                                    <img src={photos} alt=""/>
                                </s.InputBtn>

                                <s.InputBtn>
                                    <img src={gif} alt=""/>
                                </s.InputBtn>

                                <s.InputBtn>
                                    <img src={sticker} alt=""/>
                                </s.InputBtn>
                            </s.InputButtons>
                        </s.InputBox>
                    </s.InputBlock>
                    <s.ViewComment>View 1 comment</s.ViewComment>
                </s.InputComment>
            </s.BlockPost>
        </div>
    )
}

export default PinnedPost