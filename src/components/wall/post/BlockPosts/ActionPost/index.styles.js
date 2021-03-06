import styled from "@emotion/styled";
import {Icons} from "../../../../../sprite";

export const PostAction = styled.div `
  padding: 0 15px;
  margin-top: 15px;
  display: flex;
`

export const ActionsComments = styled.div `
  width: 100%;
  display: flex;
`

export const Smile = styled.div `
  display: flex;
  width: 100%;
`

export const SmileDescription = styled.div `
  color: var(--facebookGrey);
  margin-left: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const Actions = styled.div `
  border-top: 1px solid var(--facebookLightGrey);
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
`

export const ActionIcon = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Icon = styled(Icons) `
  --iconSize: 20px;
`