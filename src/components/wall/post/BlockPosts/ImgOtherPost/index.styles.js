import styled from "@emotion/styled";

export const PostImg = styled.div `
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 10px;
  margin-top: 20px;
  overflow: hidden;
`

export const Post = styled.div `
  border: 1px solid #E5E6EB;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`

export const Img = styled.div `
  width: 300px;
  height: 300px;
  background: #333333;
  border-radius: 8px 8px 0 0;
`

export const TitleBox = styled.div `
  padding: 10px 14px;
`

export const ImgTitle = styled.h4 `
`

export const ImgSubtitle = styled.h4 `
  font-size: 13px;
  line-height: 1.2;
  color: var(--facebookGrey);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`