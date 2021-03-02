import React from "react";
import plus from "../../../img/svg/plus.svg"
import messenger from "../../../img/svg/messenger.svg"
import notification from "../../../img/svg/notification.svg"
import more from "../../../img/svg/more.svg"
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
                <img src={plus} alt=""/>
            </s.ProfileIcon>

            <s.ProfileIcon>
                <img src={messenger} alt=""/>
            </s.ProfileIcon>

            <s.ProfileIcon>
                <img src={notification} alt=""/>
            </s.ProfileIcon>

            <s.ProfileIcon>
                <img src={more} alt=""/>
            </s.ProfileIcon>
        </s.ProfileStyles>
    )
}

export default Profile