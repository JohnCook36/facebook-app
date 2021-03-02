import styled from "@emotion/styled";


export const WallBox = styled.div `
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  width: 877px;
`

export const Content = styled.div `
  display: grid;
  grid-template-columns: 361px 502px;
  grid-template-areas: 'menu posts';
  grid-gap: 15px;
`

export const Posts = styled.div `
  grid-gap: 20px;
  grid-area: posts;
`