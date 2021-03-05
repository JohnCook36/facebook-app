import styled from "@emotion/styled";
import {Icons} from "../../../../sprite";

export const Buttons = styled.div`
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
  transition: .2s;
  --iconSize: 20px;
  &:hover {
    background-color: var(--facebookLightBlue);
    color: var(--facebookBlue);
  }
`

export const Icon = styled(Icons) `
`

export const NameBtn = styled.span `
    margin-left: 5px;
`

