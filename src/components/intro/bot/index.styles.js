import styled from "@emotion/styled";


export const IntroBot = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  width: 877px;
  border-top: 1px solid var(--facebookLineGrey);
`

export const IntroNav = styled.div `
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
  &:hover {
    color: #0572EF;
    border-bottom: 3px solid #0572EF;
  }
`

export const NavLinkIcon = styled.div `
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 9px;
  height: 5px;
`

export const BotBtn = styled.div `
  display: flex;
  align-items: center;
`

export const BtnNav = styled.button `
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
  padding: 10px 15px;
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: #E9F3FE;
    color: #0572EF;
  }
`