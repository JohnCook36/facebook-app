import styled from "@emotion/styled";

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

export const PhotoBlock = styled.div `
  display: grid;
  padding: 0 15px 0;
  grid-template-columns: repeat(3, 106px);
  grid-template-rows: repeat(2, 106px);
  grid-gap: 5px;
`

export const Image = styled.div `
  width: 106px;
  height: 106px;
  background: #333333;
  border: 1px solid #E5E6EB;
`
