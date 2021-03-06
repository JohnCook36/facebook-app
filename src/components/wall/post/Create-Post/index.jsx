import React from "react"
import * as s from "./index.styles"

function CreatePost() {
    return (
        <s.BlockPost>
            <s.HeaderPost>
                <s.PostAvatar/>
                <s.BlockButtonCreate>
                    <s.ButtonCreate>Create Post</s.ButtonCreate>
                </s.BlockButtonCreate>
            </s.HeaderPost>

            <s.Add>
                <s.IconAdd>
                    <s.Icon
                        name="photo"
                        color="var(--facebookGreen)"
                        size="var(--iconSize)"
                    />
                    <s.ActionName>Photo/Video</s.ActionName>
                </s.IconAdd>

                <s.IconAdd>
                    <s.Icon
                        name="pointer"
                        color="var(--pointer)"
                        size="var(--iconSize)"
                    />
                    <s.ActionName>Check in</s.ActionName>
                </s.IconAdd>

                <s.IconAdd>
                    <s.Icon
                        name="tagFriends"
                        color="var(--facebookBlue)"
                        size="var(--iconSize)"
                    />
                    <s.ActionName>Tag Friends</s.ActionName>
                </s.IconAdd>
            </s.Add>
        </s.BlockPost>
    )
}

export default CreatePost