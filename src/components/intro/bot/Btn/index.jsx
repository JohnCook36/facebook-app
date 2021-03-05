import React from "react"
import * as s from "./index.styles";

function BotBtn() {
    return (
        <s.Buttons>
            <s.BtnNav>
                <s.Icon
                    name="like"
                    color="var(--facebookBlack)"
                    size="var(--iconSize)"
                />
                <s.NameBtn>Liked</s.NameBtn>
            </s.BtnNav>

            <s.BtnNav>
                <s.Icon
                    name="messenger"
                    color="var(--facebookBlack)"
                    size="var(--iconSize)"
                />
                <s.NameBtn>Message</s.NameBtn>
            </s.BtnNav>

            <s.BtnNav>
                <s.Icon
                    name="search"
                    color="var(--facebookBlack)"
                    size="var(--iconSizeSearch)"
                />
            </s.BtnNav>

            <s.BtnNav>
                <s.Icon
                    name="ellipsis"
                    color="var(--facebookBlack)"
                    size="var(--iconSize)"
                />
            </s.BtnNav>
        </s.Buttons>
    )
}

export default BotBtn