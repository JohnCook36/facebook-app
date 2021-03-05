import React from "react"
import * as s from "./index.styles";

function Nav() {
    return (
        <s.Link>
            <s.NavLink href="#">Home</s.NavLink>
            <s.NavLink href="#">Reviews</s.NavLink>
            <s.NavLink href="#">About</s.NavLink>
            <s.NavLink href="#">Community</s.NavLink>
            <s.NavLink href="#">More
                <s.NavLinkIcon>
                    <s.Icon
                        name="more"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                </s.NavLinkIcon>
            </s.NavLink>
        </s.Link>

    )
}

export default Nav