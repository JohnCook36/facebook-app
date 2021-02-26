import React from "react";
import * as s from "./index.styles"
import more from "../../../img/svg/more.svg"
import like from "../../../img/svg/like.svg"
import messenger from "../../../img/svg/messenger.svg"
import search from "../../../img/svg/search.svg"
import ellipsis from "../../../img/svg/ellipsis.svg"


const Bot = () => {
    return (
        <s.IntroBot>
            <s.Container>
                <s.IntroNav>
                    <s.NavLink href="#">Home</s.NavLink>
                    <s.NavLink href="#">Reviews</s.NavLink>
                    <s.NavLink href="#">About</s.NavLink>
                    <s.NavLink href="#">Community</s.NavLink>
                    <s.NavLink href="#">More
                        <s.NavLinkIcon>
                            <img src={more} alt=""/>
                        </s.NavLinkIcon>
                    </s.NavLink>
                </s.IntroNav>

                <s.BotBtn>
                    <s.BtnNav>
                        <img src={like} alt=""/>
                        <span>Liked</span>
                    </s.BtnNav>

                    <s.BtnNav>
                        <img src={messenger} alt=""/>
                        <span>Message</span>
                    </s.BtnNav>

                    <s.BtnNav>
                        <img src={search} alt=""/>
                    </s.BtnNav>

                    <s.BtnNav>
                        <img src={ellipsis} alt=""/>
                    </s.BtnNav>
                </s.BotBtn>
            </s.Container>
        </s.IntroBot>
    )
}

export default Bot