import React from "react"
import * as s from "./index.styles";
import flag from "../../../../img/svg/flag.svg";

function Transparency() {
    return (
        <s.Block>
            <s.BlockTitle>
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
                    <img src={flag} alt=""/>
                </s.TransparencyIcon>
                <s.CreatedText>Page created - 20 October 2015</s.CreatedText>
            </s.TransparencyCreated>
        </s.Block>
    )
}

export default Transparency