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

    case postsTypes.LIKE_POST:
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.postId
      );

      state.posts[postIndex] = {
        ...state.posts[postIndex],
        likes: [...state.posts[postIndex].likes, action.payload.newLike]
      };

      return {
        ...state
      };

    case postsTypes.UNLIKE_POST:
      const postIndex2 = state.posts.findIndex(
        post => post.id === action.payload.postId
      );

      state.posts[postIndex2] = {
        ...state.posts[postIndex2],
        likes: [
          ...state.posts[postIndex2].likes.filter(
            like => like.user !== action.payload.user_id
          )
        ]
      };

      return {
        ...state
      };

    default:
      return state;
  }
};

export default postsReducer;
