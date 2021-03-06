import React from "react"
import * as s from "./index.styles";

function Map() {
    return (
        <s.MapBlock>
            <s.MapAddress>
                <s.AddressBlock>
                    <s.PointerAddress>
                        <s.Icon
                            name="pointer"
                            color="var(--facebookGrey)"
                            size="var(--iconSize)"
                        />
                    </s.PointerAddress>
                    <s.Address>
                        <s.AddressText href="#">Address line 1</s.AddressText>
                        <s.AddressText href="#">Address line 2</s.AddressText>
                    </s.Address>
                </s.AddressBlock>
            </s.MapAddress>

            <s.MapIcon>
                <s.PointerMap>
                    <s.Icon
                        name="pointer"
                        color="var(--pointer)"
                        size="var(--iconSize)"
                    />
                </s.PointerMap>

                <s.InfoMap>
                    <s.Icon
                        name="info"
                        color="var(--facebookGrey)"
                        size="var(--iconSize)"
                    />
                </s.InfoMap>
            </s.MapIcon>
        </s.MapBlock>
    )
}

export default Map