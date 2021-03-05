import React from "react";
import * as s from "./index.styles"
import avatar from "../../../img/png/avatar-s.png"

const Main = () => {
    return (
        <s.Main>
            <s.Container>
                <s.Avatar>
                    <img src={avatar} alt=""/>
                    <s.Title>
                        <s.Name>Name</s.Name>
                        <s.industry>industry</s.industry>
                    </s.Title>
                </s.Avatar>

                <s.Button>
                    <s.Icon
                        name="reservation"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                    <s.ButtonTitle>Book Now</s.ButtonTitle>
                </s.Button>
            </s.Container>

        </s.Main>
    )
}

export default Main