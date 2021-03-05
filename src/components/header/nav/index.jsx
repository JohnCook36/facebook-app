import React from "react";
import video from "../../../img/svg/video.svg"
import marketplace from "../../../img/svg/marketplace.svg"
import group from "../../../img/svg/group.svg"
import games from "../../../img/svg/games.svg"
import * as s from "./index.styles";

const Nav = () => {

    return (
        <s.NavStyles>
            <s.BgcIcon>
                <s.Icon
                    name="home"
                    color="var(--facebookGrey)"
                    size="var(--IconsSize)"
                />
            </s.BgcIcon>

            <s.BgcIcon>
                <s.Icon
                    name="video"
                    color="var(--facebookGrey)"
                    size="var(--IconsSize)"
                />
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>

            <s.BgcIcon>
                <s.Icon
                    name="marketplace"
                    color="var(--facebookGrey)"
                    size="var(--IconsSize)"
                />
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>

            <s.BgcIcon>
                <s.Icon
                    name="group"
                    color="var(--facebookGrey)"
                    size="var(--IconsSize)"
                />
            </s.BgcIcon>

            <s.BgcIcon>
                <s.Icon
                    name="games"
                    color="var(--facebookGrey)"
                    size="var(--IconsSize)"
                />
                <s.CircleRed className="circle-red">6</s.CircleRed>
            </s.BgcIcon>
        </s.NavStyles>
    )
}

export default Nav