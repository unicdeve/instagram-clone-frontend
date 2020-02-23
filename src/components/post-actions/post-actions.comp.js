import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  ArticleActionsWrapper,
  ArticleActionIcons,
  RightIcons,
  LeftIcons,
  IconWrapper,
  LikeCountWrapper,
  ArticleCaption,
  PostedAtWrapper,
  CommentWrapper,
  RightIconWrapper,
  CommentInput,
  CommentForm
} from './post-actions.styles';
import BorderLessButton from '../BorderLessButton/BorderLessButton.comp';
import { Icon } from 'semantic-ui-react';
import LikeButton from '../like-button/like-button.comp';

export default function PostActions({
  postId,
  posted_at,
  likesCount,
  caption,
  likes
}) {
  dayjs.extend(relativeTime);

  return (
    <ArticleActionsWrapper>
      <ArticleActionIcons>
        <LeftIcons>
          <LikeButton likes={likes} postId={postId} />

          <IconWrapper>
            <Icon name='comment outline' size='large' color='black' />
          </IconWrapper>

          <IconWrapper>
            <Icon name='paper plane outline' size='large' color='black' />
          </IconWrapper>
        </LeftIcons>

        <RightIcons>
          <RightIconWrapper>
            <Icon
              className='mr-0'
              name='bookmark outline'
              size='large'
              color='black'
            />
          </RightIconWrapper>
        </RightIcons>
      </ArticleActionIcons>

      <LikeCountWrapper>{likesCount} likes</LikeCountWrapper>

      {caption && <ArticleCaption>{caption}</ArticleCaption>}

      <PostedAtWrapper>{dayjs(posted_at).fromNow()}</PostedAtWrapper>

      <CommentWrapper>
        <CommentForm>
          <CommentInput placeholder='Add comment...' width={13} />
          <BorderLessButton disabled>Post</BorderLessButton>
        </CommentForm>
      </CommentWrapper>
    </ArticleActionsWrapper>
  );
}
