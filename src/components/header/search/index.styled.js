import styled from "@emotion/styled";


export const SearchStyled = styled.div `
  display: flex;
  align-items: center;
`

export const SearchForm = styled.div `
  padding-left: 8px;
`

export const SearchBox = styled.div `
  display: flex;
  align-items: center;
  width: 281px;
  height: 40px;
  background: #F1F2F5;
  border-radius: 100px;
  border: none;
`
export const SearchButton = styled.div `
  display: flex;
  padding-left: 12px;
  justify-content: center;
  align-items: center;
  float: left;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const SearchTxt = styled('input') `
  display: flex;
  border: none;
  background: none;
  outline: none;
  float: left;
  padding-left: 8px;
  color: #66676B;
  font-size: 15px;
  line-height: 1.2;
  width: 240px;
  cursor: text;
`

export const Icon = styled.img `
  height: 23px;
  width: 23px;
  fill: #66676B;
  cursor: pointer;
`