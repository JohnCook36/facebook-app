import styled from "@emotion/styled";


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

export const PostAvatar = styled.div `
  height: 40px;
  width: 40px;
  background: var(--facebookBlue);
  border-radius: 50%;
`

export const BlockButtonCreate = styled.div `
  width: 424px;
`

export const ButtonCreate = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--facebookLightGrey);
  border-radius: 6px;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.3;
  cursor: pointer;
  transition: .1s linear;
  &:hover {
    background: #d0d0d6;
    color: var(--facebookBlue);
  }
`

export const Add = styled.div `
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`

export const IconAdd = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ActionName = styled.span `
  padding-left: 5px;
  display: flex;
  align-items: center;
  color: var(--facebookGrey);
`
