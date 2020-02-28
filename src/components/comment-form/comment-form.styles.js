import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const CommentFormWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 8px;
`;

export const CommentInput = styled.input`
  padding: 2px;
  width: 100%;
  border: none !important;

  &:focus {
    outline: none !important;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const FormButton = styled(Button)`
  background: 0 0;
`;
