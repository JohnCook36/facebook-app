import React from "react";
import home from "../../../img/svg/home.svg"
import video from "../../../img/svg/video.svg"
import marketplace from "../../../img/svg/marketplace.svg"
import group from "../../../img/svg/group.svg"
import games from "../../../img/svg/games.svg"
import * as s from "./index.styles";

const Nav = () => {

    return (
        <s.NavStyles>
            <s.BgcIcon>
                <img src={home} alt="home"/>
            </s.BgcIcon>

            <s.BgcIcon>
                <img src={video} alt=""/>
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>

            <s.BgcIcon>
                <img src={marketplace} alt=""/>
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>

            <s.BgcIcon>
                <img src={group} alt=""/>
            </s.BgcIcon>

            <s.BgcIcon>
                <img src={games} alt=""/>
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>
        </s.NavStyles>
    )
}

export default Nav