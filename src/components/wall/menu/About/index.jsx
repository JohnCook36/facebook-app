import React from "react"
import * as s from "./index.styles";
import Map from "./Map/index"

function About() {
    return (
        <div>
            <s.Block>
                <s.BlockTitle>
                    <h2>About</h2>
                    <s.SeeAll>See all</s.SeeAll>
                </s.BlockTitle>

                <s.BlockMenu>
                    <Map/>
                </s.BlockMenu>

                <s.BlockMenu>
                        <s.ListBlock>
                            <s.Icon
                                name="pointer"
                                color="var(--facebookGrey)"
                                size="var(--iconSize)"
                            />
                            <s.ListDescription>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </s.ListDescription>
                        </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="like"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            36,762 people like this, including 25 of your friends
                            <s.CircleBox>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                                <s.CircleMenu/>
                            </s.CircleBox>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="follow"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            37,822 people follow this
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="checked"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            43 people checked in here
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="website"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <s.BlueTxt>https://www.website.com/</s.BlueTxt>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="phone"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <p>012 345 6789</p>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="sendMessage"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <p>Away</p> <s.BlueTxt href="#">Send message</s.BlueTxt>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="email"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <s.BlueTxt>email@website.com</s.BlueTxt>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="time"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <s.RedText>Closed now</s.RedText>
                            <p className="work-time">08:00 - 17:00</p>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <s.Icon
                            name="industry"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                        <s.ListDescription>
                            <s.BlueTxt>Industry</s.BlueTxt>
                        </s.ListDescription>
                    </s.ListBlock>
                </s.BlockMenu>
            </s.Block>
        </div>
    )
}

export default About