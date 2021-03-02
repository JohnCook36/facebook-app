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

export const VideoBlock = styled.div `
  padding: 0 15px 0;
`

export const VideoImage = styled.div `
  width: 328px;
  height: 185px;
  background: #333333;
  border-radius: 8px;
`

export const VideoTime = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 27px 21px 0;
  color: var(--white);
  height: 185px;
  cursor: default;
`

export const VideoDescription = styled.p `
  max-width: 328px;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`

export const VideoRating = styled.div `
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const LikeValue = styled.span `
  margin-left: 10px;
`

export const VideoInfo = styled.div `
  margin-top: 5px;
  color: var(--facebookGrey);
`