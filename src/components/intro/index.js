import React from "react";
import {IntroBox} from "./index.styles"
import CoverImg from "./cover";
import Main from "./main";

const Intro = () => {
    return (
        <IntroBox>
            <CoverImg/>
            <Main/>
        </IntroBox>
    )
}

export default Intro