import React from "react";
import avatar from "../../../img/png/avatar.png"
import * as s from "./index.styles"

const Profile = () => {

    return (
        <s.ProfileStyles>
            <s.HeaderInfo>
                <s.Avatar>
                    <img id="ava-s" src={avatar} alt="avatar"/>
                </s.Avatar>
                <s.Name>Sally</s.Name>
            </s.HeaderInfo>

            <s.ProfileIcon>
                <s.Icon
                    name="plus"
                    color="var(--facebookGrey)"
                    size="var(--iconSize)"
                />
            </s.ProfileIcon>

            <s.ProfileIcon>
                <s.Icon
                    name="messenger"
                    color="var(--facebookGrey)"
                    size="var(--iconSize)"
                />
            </s.ProfileIcon>

            <s.ProfileIcon>
                <s.Icon
                    name="notification"
                    color="var(--facebookGrey)"
                    size="var(--iconSize)"
                />
            </s.ProfileIcon>

            <s.ProfileIcon>
                <s.Icon
                    name="more"
                    color="var(--facebookGrey)"
                    size="var(--iconSize)"
                />
            </s.ProfileIcon>
        </s.ProfileStyles>
    )
}

export default Profile