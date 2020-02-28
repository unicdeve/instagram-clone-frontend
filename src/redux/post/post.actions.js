import axios from 'axios';
import postsTypes from './post.types';

export const getPosts = () => dispatch => {
  dispatch({
    type: postsTypes.GET_POSTS_START
  });

  axios
    .get('/posts/details')
    .then(res => {
      dispatch({
        type: postsTypes.GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: postsTypes.GET_POSTS,
        payload: []
      });
    });
};

export const likePost = postId => dispatch => {
  axios
    .post('/posts/like/', { post: postId })
    .then(res => {
      dispatch({
        type: postsTypes.LIKE_POST,
        payload: {
          postId,
          newLike: {
            id: res.data.id,
            user: res.data.user,
            liked_at: res.data.liked_at
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const unlikePost = (postId, likeId, user_id) => dispatch => {
  axios
    .delete(`/posts/like/${likeId}`)
    .then(res => {
      dispatch({
        type: postsTypes.UNLIKE_POST,
        payload: {
          postId,
          user_id
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const likeComment = (postId, commentId) => dispatch => {
  axios
    .post('/posts/like-comment/', { comment: commentId })
    .then(res => {
      const payload = {
        postId,
        commentId,
        newLike: {
          id: res.data.id,
          user: res.data.user,
          liked_at: res.data.liked_at
        }
      };

      dispatch({
        type: postsTypes.LIKE_COMMENT,
        payload
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const unlikeComment = (
  postId,
  commentId,
  likeId,
  user_id
) => dispatch => {
  axios
    .delete(`/posts/like-comment/${likeId}`)
    .then(res => {
      dispatch({
        type: postsTypes.UNLIKE_COMMENT,
        payload: {
          postId,
          commentId,
          user_id
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const postComment = (postId, body, user) => dispatch => {
  axios
    .post('/posts/comment/', { post: postId, body })
    .then(res => {
      dispatch({
        type: postsTypes.POST_COMMENT,
        payload: {
          postId,
          newComment: {
            id: res.data.id,
            user,
            body: res.data.body,
            created_at: res.data.created_at,
            likes: []
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};
