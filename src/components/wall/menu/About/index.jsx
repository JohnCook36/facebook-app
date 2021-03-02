import React from "react"
import * as s from "./index.styles";
import pointer from "../../../../img/svg/pointer.svg";
import info from "../../../../img/svg/info.svg";
import like from "../../../../img/svg/like.svg";
import follow from "../../../../img/svg/follow.svg";
import checked from "../../../../img/svg/checked.svg";
import website from "../../../../img/svg/website.svg";
import phone from "../../../../img/svg/phone.svg";
import sendMessage from "../../../../img/svg/send-message.svg";
import email from "../../../../img/svg/email.svg";
import time from "../../../../img/svg/time.svg";
import industry from "../../../../img/svg/industry.svg";

function About() {
    return (
        <div>
            <s.Block>
                <s.BlockTitle>
                    <h2>About</h2>
                    <s.SeeAll>See all</s.SeeAll>
                </s.BlockTitle>

                <s.BlockMenu>
                    <s.MapBlock>
                        <s.MapAddress>
                            <s.AddressBlock>
                                <s.PointerAddress>
                                    <img src={pointer} alt=""/>
                                </s.PointerAddress>
                                <s.AddressTitle>
                                    <p>Address line 1</p>
                                    <p>Address line 2</p>
                                </s.AddressTitle>
                            </s.AddressBlock>
                        </s.MapAddress>

                        <s.MapIcon>
                            <s.PointerMap>
                                <img src={pointer} alt=""/>
                            </s.PointerMap>

                            <s.InfoMap>
                                <img src={info} alt=""/>
                            </s.InfoMap>
                        </s.MapIcon>
                    </s.MapBlock>
                </s.BlockMenu>

                <s.BlockMenu>
                        <s.ListBlock>
                            <img src={info} alt=""/>
                            <s.ListDescription>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </s.ListDescription>
                        </s.ListBlock>

                    <s.ListBlock>
                        <img src={like} alt=""/>
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
                        <img src={follow} alt=""/>
                        <s.ListDescription>
                            37,822 people follow this
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={checked} alt=""/>
                        <s.ListDescription>
                            43 people checked in here
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={website} alt=""/>
                        <s.ListDescription>
                            37,822 people follow this
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={website} alt=""/>
                        <s.ListDescription>
                            <a href="">https://www.website.com/</a>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={phone} alt=""/>
                        <s.ListDescription>
                            <a>012 345 6789</a>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={sendMessage} alt=""/>
                        <s.ListDescription>
                            <p>Away</p> <a href="#">Send message</a>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={email} alt=""/>
                        <s.ListDescription>
                            <a href="">email@website.com</a>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={time} alt=""/>
                        <s.ListDescription>
                            <p className="closed-now">Closed now</p>
                            <p className="work-time">08:00 - 17:00</p>
                        </s.ListDescription>
                    </s.ListBlock>

                    <s.ListBlock>
                        <img src={industry} alt=""/>
                        <s.ListDescription>
                            <a href="">Industry</a>
                        </s.ListDescription>
                    </s.ListBlock>
                </s.BlockMenu>
            </s.Block>
        </div>
    )
}

export default About