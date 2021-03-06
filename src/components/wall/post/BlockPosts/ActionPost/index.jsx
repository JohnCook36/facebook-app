import * as s from "./index.styles";
import like from "../../../../../img/smiley/like.png";
import smile2 from "../../../../../img/smiley/smile-2.png";
import smile3 from "../../../../../img/smiley/smile-3.png";
import smile4 from "../../../../../img/smiley/smile-4.png";
import smile5 from "../../../../../img/smiley/smile-5.png";
import smile6 from "../../../../../img/smiley/smile-6.png";
import smile7 from "../../../../../img/smiley/smile-7.png";
import {ActionName} from "../../Create-Post/index.styles";


function ActionPost() {
    return (
        <>
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
                            <span>1 comment 1 share</span>
                        </s.SmileDescription>
                    </s.Smile>
                </s.ActionsComments>
            </s.PostAction>

            <s.Actions>
                <s.ActionIcon>
                    <s.Icon
                        name="hotLike"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                    <ActionName>Like</ActionName>
                </s.ActionIcon>

                <s.ActionIcon>
                    <s.Icon
                        name="comment"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                    <ActionName>Comment</ActionName>
                </s.ActionIcon>

                <s.ActionIcon>
                    <s.Icon
                        name="share"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                    <ActionName>Share</ActionName>
                </s.ActionIcon>
            </s.Actions>
        </>
    )
}

export default ActionPost