import * as s from "./index.styles";


function InputPost() {
    return (
        <s.InputComment>
            <s.Relevant>Most relevant</s.Relevant>
            <s.InputBlock>
                <s.AvatarComment/>
                <s.InputBox>
                    <s.InputTxt placeholder="Write a comment..."/>

                    <s.InputButtons>
                        <s.InputBtn>
                            <s.Icon
                                name="smiley"
                                color="var(--facebookGrey)"
                                size="var(--iconSize)"
                            />
                        </s.InputBtn>

                        <s.InputBtn>
                            <s.Icon
                                name="photos"
                                color="var(--facebookGrey)"
                                size="var(--iconSize)"
                            />
                        </s.InputBtn>

                        <s.InputBtn>
                            <s.Icon
                                name="gif"
                                color="var(--facebookGrey)"
                                size="var(--iconSize)"
                            />
                        </s.InputBtn>

                        <s.InputBtn>
                            <s.Icon
                                name="sticker"
                                color="var(--facebookGrey)"
                                size="var(--iconSize)"
                            />
                        </s.InputBtn>
                    </s.InputButtons>
                </s.InputBox>
            </s.InputBlock>
            <s.ViewComment>View 1 comment</s.ViewComment>
        </s.InputComment>
    )
}

export default InputPost