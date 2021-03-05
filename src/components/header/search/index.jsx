import React from "react";
import logo from "../../../img/png/logo.png"
import * as s from "./index.styled";

const Search = () => {
    return (
        <s.SearchStyled>
            <img src={logo} alt="logo"/>
            <s.SearchForm>
                <s.SearchBox>
                    <s.SearchButton>
                        <s.Icon
                            name="search"
                            color="var(--facebookGrey)"
                            size="var(--IconsSize)"
                        />
                    </s.SearchButton>
                    <s.SearchTxt  type="text" placeholder="Search Facebook"/>
                </s.SearchBox>
            </s.SearchForm>
        </s.SearchStyled>
    )
}

export default Search