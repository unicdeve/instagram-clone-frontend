import postsTypes from './post.types';

const initialState = {
  posts: [],
  loading: false,
  errors: {}
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    case postsTypes.GET_POSTS_START:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default postsReducer;
