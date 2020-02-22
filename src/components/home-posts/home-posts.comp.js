import React from 'react';

import {
  PostsWrapper,
  PostArticle,
  ArticleHeader,
  DotsMenuWrapper,
  ArticleImgWrapper,
  PostImg,
  ArticleFooter,
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
} from './home-posts.styles';
import MiniProfileComp from '../mini-profile/mini-profile.comp';
import { Icon } from 'semantic-ui-react';
import BorderLessButton from '../BorderLessButton/BorderLessButton.comp';

function HomePosts() {
  return (
    <PostsWrapper>
      <PostArticle>
        <ArticleHeader className='p-3'>
          <MiniProfileComp imgSize={32} />

          <DotsMenuWrapper>
            <Icon name='ellipsis horizontal' />
          </DotsMenuWrapper>
        </ArticleHeader>

        <ArticleImgWrapper>
          <PostImg src='http://127.0.0.1:8000/media/posts/images/None-uniqueomokenny.jpg' />
        </ArticleImgWrapper>

        <ArticleFooter>
          <ArticleActionIcons>
            <LeftIcons>
              <IconWrapper>
                <Icon name='heart outline' size='large' color='black' />
              </IconWrapper>

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

          <LikeCountWrapper>99 likes</LikeCountWrapper>

          <ArticleCaption>this is the fucking description</ArticleCaption>

          <PostedAtWrapper>8 hours ago</PostedAtWrapper>

          <CommentWrapper>
            <CommentForm>
              <CommentInput placeholder='Add comment...' width={13} />
              <BorderLessButton disabled>Post</BorderLessButton>
            </CommentForm>
          </CommentWrapper>
        </ArticleFooter>
      </PostArticle>
    </PostsWrapper>
  );
}

export default HomePosts;
