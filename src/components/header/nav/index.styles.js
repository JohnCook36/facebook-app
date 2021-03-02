import styled from "@emotion/styled";


export const NavStyles = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const BgcIcon = styled.div `
  position: relative;
  padding: 15px 40px;
  border-bottom: 3px solid transparent;
  transition: 0.2s;
  &:hover {
    border-bottom: 3px solid #0572EF;
    cursor: pointer;
  }
`

export const CircleRed = styled.div `
  position: absolute;
  top: 2px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: var(--white);
  background: var(--facebookRed);
`