import styled from "@emotion/styled";
import {Icons} from "../../../../../sprite";

export const MapBlock = styled.div `
  width: auto;
  height: 170px;
  background: #333333;
  border-radius: 8px;
`

export const MapAddress = styled.div `
  padding: 21px 12px 0 21px;
`

export const AddressBlock = styled.div `
  display: flex;
  align-items: center;
  height: 65px;
  background-color: var(--white);
  border-radius: 8px;
`

export const PointerAddress = styled.div `
  margin-left: 20px;
  fill: #C4C4C4;
  width: 16px;
  height: 20px;
  --iconSize: 20px
`

export const Icon = styled(Icons)`
  
`

export const Address = styled.div `
  display: flex;
  flex-direction: column;
  color: var(--facebookBlue);
  margin-left: 15px;
`

export const AddressText = styled.a `
  color: var(--facebookBlue);
`

export const MapIcon = styled.div `
  margin: 20px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 230px;
  height: 50px;
`

export const PointerMap = styled.div `
  --iconSize: 24px;
`

export const InfoMap = styled.div `
  margin-top: 5px;
  height: 16px;
  display: flex;
  align-self: flex-start;
  --iconSize: 16px;
`