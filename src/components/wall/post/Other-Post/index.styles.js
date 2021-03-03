import styled from "@emotion/styled";


export const TitlePost = styled.div `
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--facebookGrey);
  text-transform: uppercase;
  margin: 30px 0 10px;
`

export const BlockPost = styled.div `
  padding: 15px 0;
  background: var(--white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

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
  fill: var(--facebookGrey);
  cursor: pointer;
`

export const Icon = styled.img `
  height: 6px;
  width: 26px;
`

export const PostText = styled.div `
  padding: 0 15px;
  margin-top: 15px;
  font-size: 16px;
  line-height: 1.2;
`

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
  fill: transparent;
`

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

export const ViewComment = styled.p `
  margin-top: 10px;
`
