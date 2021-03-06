import styled from "@emotion/styled";
import {Icons} from "../../../../sprite";


export const Block = styled.div `
  display: grid;
  grid-gap: 15px;
  padding: 15px 0 25px;
  background: var(--white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

export const BlockTitle = styled.div `
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SeeAll = styled.a `
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  color: var(--facebookBlue);
  cursor: pointer;
`
export const BlockMenu = styled.div `
  padding: 0 15px 0;
  display: grid;
  grid-gap: 15px;
  font-size: 16px;
  line-height: 19px;
`

export const ListBlock = styled.div `
    display: flex;
    align-items: flex-start;
`

export const Icon = styled(Icons) `
  --iconSize: 20px;
`

export const ListDescription = styled.div `
  margin-left: 10px;
`
export const CircleBox = styled.div `
  position: relative;
  display: flex;
`

export const CircleMenu = styled.div `
  border: 2px solid #FFFFFF;
  width: 33px;
  height: 33px;
  background: var(--facebookBlue);
  border-radius: 50%;
`

export const BlueTxt = styled.div `
  color: var(--facebookBlue);
  cursor: pointer;
`

export const RedText = styled.div `
  color: var(--facebookRed);
`

