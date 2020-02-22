import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
  border: 0.2px solid rgba(0, 0, 0, 0.25);
  height: 80vh;
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

export const ArticleFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const IconWrapper = styled(Button)`
  align-self: center;
  background: 0 0 !important;
  border: 0 !important;
  padding: 0 !important;
  margin-right: 1rem !important;
`;

export const RightIconWrapper = styled(Button)`
  align-self: center;
  background: 0 0 !important;
  border: 0 !important;
  padding: 0 !important;
`;

export const LeftIcons = styled.div``;
export const RightIcons = styled.div``;

export const LikeCountWrapper = styled.div`
  font-weight: bold;
  padding: 0 0.8rem;
`;

export const ArticleCaption = styled.div`
  padding: 0.4rem 0.8rem;
`;

export const PostedAtWrapper = styled.div`
  padding: 0 0 4px 0.8rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const CommentWrapper = styled.div`
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
