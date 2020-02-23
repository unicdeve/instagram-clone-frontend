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
