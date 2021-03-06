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

export const TransparencyInfo = styled.a `
  padding: 0 15px;
  font-size: 15px;
  line-height: 1.3;
  color: var(--facebookGrey)
`

export const TransparencyCreated = styled.a `
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.02em;
`

export const TransparencyIcon = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  width: 39px;
  background: var(--facebookInputGrey);
  border-radius: 50%;
  cursor: pointer;
`

export const Icon = styled(Icons) `
  --iconSize: 20px;
`

export const CreatedText = styled.a `
  padding-left: 10px;
`

