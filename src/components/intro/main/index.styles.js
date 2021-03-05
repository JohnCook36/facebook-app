import styled from "@emotion/styled";
import {Icons} from "../../../sprite";


export const Main = styled.div `
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 877px;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-size: 17px;
  margin-left: 28px;
`

export const Name = styled.h1`
  margin: 0;
`

export const industry = styled.p`
  margin: 0;
  color: #66676B;
`
export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  background: #0572EF;
  border-radius: 6px;
  padding: 10px 105px;
  border: none;
  --iconSize: 17px
`
export const Icon = styled(Icons)`
  cursor: pointer;
`

export const ButtonTitle = styled.span`
  margin-left: 6px;
  color: #ffffff;
`

