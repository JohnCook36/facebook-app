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
export const BlockMenu = styled.div ` 
  padding: 0 15px 0;
  display: grid;
  grid-gap: 15px;
  font-size: 16px;
  line-height: 19px;
`

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
`

export const AddressTitle = styled.div `
  color: var(--facebookBlue);
  margin-left: 15px;
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
  height: 24px;
  color: var(--pointer);
`

export const InfoMap = styled.div `
  margin-top: 5px;
  height: 16px;
  display: flex;
  align-self: flex-start;
`

export const ListBlock = styled.div `
    display: flex;
    align-items: flex-start;
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