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
  RightIconWrapper,
  CommentsWrapper,
  CommentsCount
} from './post-actions.styles';
import { Icon } from 'semantic-ui-react';
import LikeButton from '../like-button/like-button.comp';
import SingleComment from '../single-comment/single-comment.com';
import CommentForm from '../comment-form/comment-form.comp';

export default function PostActions({
  postId,
  posted_at,
  likesCount,
  caption,
  comments,
  likes,
  username
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

      {caption && (
        <ArticleCaption>
          <span className='font-weight-bolder pr-2'>{username}</span>
          {caption}
        </ArticleCaption>
      )}

      {comments && (
        <CommentsWrapper>
          {comments.length > 0 && (
            <CommentsCount to='/post-details'>
              View all {comments.length} comments
            </CommentsCount>
          )}
          {comments.map(comment => (
            <SingleComment key={comment.id} comment={comment} postId={postId} />
          ))}
        </CommentsWrapper>
      )}

      <PostedAtWrapper>{dayjs(posted_at).fromNow()}</PostedAtWrapper>

      <CommentForm postId={postId} />
    </ArticleActionsWrapper>
  );
}
