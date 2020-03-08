import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;

export const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
  border: 0.2px solid rgba(0, 0, 0, 0.25);
  height: 100%;
`;

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.25);
`;

export const DotsMenuWrapper = styled(Button)`
  align-self: center;
  background: 0 0 !important;
  border: 0 !important;
  padding: 0 !important;
`;

export const ArticleImgWrapper = styled.div`
  height: 80vh;
`;

export const PostImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
