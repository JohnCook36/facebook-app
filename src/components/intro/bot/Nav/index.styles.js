import styled from "@emotion/styled";
import {Icons} from "../../../../sprite";


export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavLink = styled.a `
  display: flex;
  align-items: center;
  padding: 21px 16px;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  color: #66676B;
  transition: .2s;
  &:hover {
    color: var(--facebookBlue);
    border-bottom: 3px solid var(--facebookBlue);
  }
`

export const NavLinkIcon = styled.div `
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 9px;
  height: 5px;
  --iconSize: 9px;
`

export const Icon = styled(Icons) `
`