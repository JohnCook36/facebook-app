import React from "react";
import Search from "./search/index";
import {HeaderStyles} from "./index.styles";
import Nav from "./nav/index";
import Profile from "./profile/index";

function Header() {
    return (
        <HeaderStyles>
            <Search/>
            <Nav/>
            <Profile/>
        </HeaderStyles>
    )
}

export default Header