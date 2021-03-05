import React from 'react';
import styled from "@emotion/styled";

const StyledSvg = styled.svg`
  flex-shrink: 0;
  width: var(--iconSize);
  height: var(--iconSize);
`

export function Icons({name, color, size, className}) {

    return(
        <StyledSvg className={className}
             fill={color}>
            <use xlinkHref={`#${name}`} />
        </StyledSvg>
    )
}