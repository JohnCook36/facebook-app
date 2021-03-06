import styled from "@emotion/styled";
import {Icons} from "../../../../../sprite";

export const InputComment = styled.div `
  color: var(--facebookGrey);
  padding: 10px 15px 10px 15px;
  margin-top: 10px;
  border-top: 1px solid var(--facebookLightGrey);
`

export const Relevant = styled.p `
  display: flex;
  justify-content: flex-end;
`

export const InputBlock = styled.div `
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

export const AvatarComment = styled.div `
  width: 33px;
  height: 33px;
  background: var(--facebookBlue);
  border-radius: 50%;
`

export const InputBox = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 430px;
  height: 36px;
  background: var(--facebookInputGrey);
  border-radius: 100px;
  padding: 10px 15px;
`

export const InputTxt = styled.input `
  border: none;
  background: var(--facebookInputGrey);
  display: flex;
  background: none;
  outline: none;
  width: 335px;
  cursor: text;
`

export const InputButtons = styled.div `
  display: flex;
`

export const InputBtn = styled.a `
  margin-left: 10px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const Icon = styled(Icons) `
  --iconSize: 20px;
`

export const ViewComment = styled.p `
  margin-top: 10px;
`