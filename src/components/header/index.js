import React from "react";
import Search from "./search";
import {HeaderStyles} from "./index.styles";
import Nav from "./nav";
import Profile from "./profile";

const Header = () => {

    return (
        <HeaderStyles>
            <Search/>
            <Nav/>
            <Profile/>
        </HeaderStyles>

    )
}

export default Header