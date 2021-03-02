import React from "react";
import * as s from "./index.styles";
import Menu from "./menu";
import Posts from "./post";


const Wall = () => {

    return (
        <s.WallBox>
            <s.Container>
                <s.Content>
                    <Menu/>
                    <Posts/>
                </s.Content>
            </s.Container>
        </s.WallBox>
    )
}

export default Wall