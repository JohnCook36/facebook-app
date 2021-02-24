import React from "react";
import * as s from "./index.styles"
import avatar from "../../../img/png/avatar-s.png"
import iconBook from "../../../img/svg/reservation.svg"

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
                    <img src={iconBook} alt=""/>
                    <s.ButtonTitle>Book Now</s.ButtonTitle>
                </s.Button>
            </s.Container>

        </s.Main>
    )
}

export default Main