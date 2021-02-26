import React from "react";
import logo from "../../../img/png/logo.png"
import search from "../../../img/svg/search.svg"
import * as s from "./index.styled";

const Search = () => {
    return (
        <s.SearchStyled>
            <img src={logo} alt="logo"/>
            <s.SearchForm>
                <s.SearchBox>
                    <s.SearchButton>
                        <s.Icon src={search} alt="search"/>
                    </s.SearchButton>
                    <s.SearchTxt  type="text" placeholder="Search Facebook"/>
                </s.SearchBox>
            </s.SearchForm>
        </s.SearchStyled>
    )
}

export default Search