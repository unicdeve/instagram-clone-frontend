import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const ButtonWrapper = styled(Button)`
  border: 0 !important;
  color: #3897f0 !important;
  display: inline;
  padding: 8px !important;
  position: relative;
  background: 0 !important;
  cursor: pointer;
  text-align: center;
  user-select: none;
  width: auto;

  &:focus {
    outline: none;
  }
`;
