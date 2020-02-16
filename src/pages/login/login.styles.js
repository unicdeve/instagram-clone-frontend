import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const CardWrapper = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid #eee;
  padding: 3rem;
`;

export const CardHeader = styled(Header)`
  font-family: 'Dancing Script', cursive;
`;

export const CardFormContainer = styled.div``;

export const CardFooter = styled.div``;

export const OrContainer = styled.div`
  display: flex;
`;

export const HalfRuler = styled.div`
  flex-grow: 1;
  height: 1px;
  position: relative;
  top: 0.45rem;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const OrDiv = styled.div`
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.25);
  margin: 0 1rem;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  text-transform: uppercase;
`;

export const CardButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
