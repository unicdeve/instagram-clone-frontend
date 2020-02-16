import styled from 'styled-components';

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
