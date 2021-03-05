import React from "react";
import * as s from "./index.styles"
import Nav from "./Nav/index"
import Btn from "./Btn/index"


const Bot = () => {
    return (
        <s.IntroBot>
            <s.Container>
                <Nav/>
                <Btn/>
            </s.Container>
        </s.IntroBot>
    )
}

export default Bot