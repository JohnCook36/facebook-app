import * as s from "./index.styles";
import world from "../../../../../img/png/world.png";


function PinnedHeaderPosts() {
    return (
        <s.HeaderPost>
            <s.PostInfo>
                <s.PostAvatar/>
                <s.AuthorInfo>
                    <p>
                        <s.AuthorName>Name</s.AuthorName> is with <s.AuthorName>Name</s.AuthorName>.
                    </p>

                    <s.PostDate>Yesterday at 14:03 <img src={world} alt=""/></s.PostDate>
                </s.AuthorInfo>
            </s.PostInfo>

            <s.OtherAction>
                <s.Icon
                    name="ellipsis"
                    color="var(--facebookGrey)"
                    size="var(--iconSize)"
                />
            </s.OtherAction>
        </s.HeaderPost>
    )
}

export default PinnedHeaderPosts