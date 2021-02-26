import React from "react";
import {IntroBox} from "./index.styles"
import CoverImg from "./cover/index";
import Main from "./main/index";
import Bot from "./bot/index";

const Intro = () => {
    return (
        <IntroBox>
            <CoverImg/>
            <Main/>
            <Bot/>
        </IntroBox>
    )
}

export default Intro