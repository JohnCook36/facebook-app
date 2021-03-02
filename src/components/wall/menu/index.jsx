import React from "react";
import * as s from "./index.styles";
import About from "./About";
import Photo from "./Photo";
import Video from "./Video";
import Transparency from "./Transparency";


function Menu() {
    return (
        <s.MenuBlock>
            <About/>
            <Photo/>
            <Video/>
            <Transparency/>
        </s.MenuBlock>
    )
}

export default Menu