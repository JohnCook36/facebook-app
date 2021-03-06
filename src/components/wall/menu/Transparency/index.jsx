import React from "react"
import * as s from "./index.styles";
import logo from "../../../../img/png/logo.png";

function Transparency() {
    return (
        <s.Block>
            <s.BlockTitle>
                <img src={logo} alt=""/>
                <h2>Page transparency</h2>
                <s.SeeAll>See all</s.SeeAll>
            </s.BlockTitle>

            <s.TransparencyInfo>
                <p>Facebook is showing information to help you
                    better understand the purpose of a Page. See
                    actions taken by the people who manage and
                    post content.</p>
            </s.TransparencyInfo>

            <s.TransparencyCreated>
                <s.TransparencyIcon>
                    <s.Icon
                        name="flag"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                </s.TransparencyIcon>
                <s.CreatedText>Page created - 20 October 2015</s.CreatedText>
            </s.TransparencyCreated>
        </s.Block>
    )
}

export default Transparency