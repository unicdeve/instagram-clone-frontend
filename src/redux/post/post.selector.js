import { createSelector } from 'reselect';

export const selectPost = state => state.post;

export const selectPosts = createSelector([selectPost], post =>
  post.posts.map(post => {
    return {
      ...post,
      likesCount: post.likes.length,
      commentsCount: post.comments.length
    };
  })
);
