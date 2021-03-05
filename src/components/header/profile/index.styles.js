import styled from "@emotion/styled";
import {Icons} from "../../../sprite";


export const ProfileStyles = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  cursor: pointer;
`

export const HeaderInfo = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  border-radius: 25px;
  margin-right: 12px;
  padding: 0 5px;
  transition: .2s;
  opacity: 1;
  &:hover {
    background-color: var(--facebookLightBlue)
  }
`

export const Avatar = styled.div `
  display: flex;
  align-items: center;
`

export const Name = styled.div `
  margin-left: 7px;
  display: flex;
  align-items: center;
`

export const ProfileIcon = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--facebookLightGrey);
  transition: .2s linear;
   &:hover {
    background-color: var(--facebookGreyBG);
  }
`

export const Icon = styled(Icons) `
  --iconSize: 15px;
  cursor: pointer;
`