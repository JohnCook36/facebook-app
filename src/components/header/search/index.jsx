import React from "react";
import logo from "../../../img/png/logo.png"
import * as s from "./index.styled";
import {Icons} from "../../../sprite/";

const Search = () => {
    return (
        <s.SearchStyled>
            <img src={logo} alt="logo"/>
            <s.SearchForm>
                <s.SearchBox>
                    <s.SearchButton>
                        <Icons
                            name="search"
                        />
                    </s.SearchButton>
                    <s.SearchTxt  type="text" placeholder="Search Facebook"/>
                </s.SearchBox>
            </s.SearchForm>
        </s.SearchStyled>
    )
}

export default Search