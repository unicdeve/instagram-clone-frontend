import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1.3rem 25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  transition: all 0.5s;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  align-self: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const RightRule = styled.div`
  height: 30px;
  width: 1px;
  margin: 0 18px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const IconLinkOptionWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const LinkOption = styled(Link)`
  margin-left: 1rem;
`;
