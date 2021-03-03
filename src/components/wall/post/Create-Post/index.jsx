import React from "react"
import * as s from "./index.styles"
import photo from "../../../../img/svg/photo.svg"
import pointer from "../../../../img/svg/pointer.svg"
import tagFriends from "../../../../img/svg/tag-friends.svg"

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
                    <img src={photo} alt=""/>
                    <s.ActionName>Photo/Video</s.ActionName>
                </s.IconAdd>

                <s.IconAdd>
                    <img src={pointer} alt=""/>
                    <s.ActionName>Check in</s.ActionName>
                </s.IconAdd>

                <s.IconAdd>
                    <img src={tagFriends} alt=""/>
                    <s.ActionName>Tag Friends</s.ActionName>
                </s.IconAdd>
            </s.Add>
        </s.BlockPost>
    )
}

export default CreatePost