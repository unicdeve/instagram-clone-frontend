import React from 'react';

import {
  PostsWrapper,
  PostArticle,
  ArticleHeader,
  DotsMenuWrapper,
  ArticleImgWrapper,
  PostImg
} from './post.styles';
import MiniProfileComp from '../mini-profile/mini-profile.comp';
import { Icon } from 'semantic-ui-react';
import PostActions from '../post-actions/post-actions.comp';

function Post({ post }) {
  const {
    user: { profile: userProfile, ...userData },
    id,
    posted_at,
    likesCount,
    caption,
    likes
  } = post;

  const profile = {
    ...userData,
    image: userProfile.image
  };

  return (
    <PostsWrapper>
      <PostArticle>
        <ArticleHeader className='p-3'>
          <MiniProfileComp imgSize={32} profile={profile} />

          <DotsMenuWrapper>
            <Icon name='ellipsis horizontal' />
          </DotsMenuWrapper>
        </ArticleHeader>

        <ArticleImgWrapper>
          <PostImg src={post.image} />
        </ArticleImgWrapper>

        <PostActions
          postId={id}
          posted_at={posted_at}
          likesCount={likesCount}
          caption={caption}
          likes={likes}
        />
      </PostArticle>
    </PostsWrapper>
  );
}

export default Post;
