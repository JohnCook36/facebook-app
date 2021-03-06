import styled from "@emotion/styled";
import {Icons} from "../../../../../sprite";

export const HeaderPost = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`

export const PostInfo = styled.div `
  display: flex;
`

export const PostAvatar = styled.div `
  height: 40px;
  width: 40px;
  background: var(--facebookBlue);
  border-radius: 50%;
`

export const AuthorInfo = styled.div `
  margin-left: 10px;
`

export const AuthorName = styled.a `
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`

export const PostDate = styled.a `
  color: var(--facebookGrey);
  font-size: 13px;
  line-height: 1.2;
`

export const OtherAction = styled.div `
  cursor: pointer;
`

export const Icon = styled(Icons) `
  --iconSize: 20px;
`