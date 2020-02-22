import styled from 'styled-components';

export const RightWrapper = styled.div`
  top: 7rem;
  position: sticky;
`;

export const MiniProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
`;

export const MiniProfileImgWrapper = styled.div`
  height: ${props => props.imgSize}px;
  width: ${props => props.imgSize}px;
  margin-right: 1rem;
`;

export const MiniProfileImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const MiniProfile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
