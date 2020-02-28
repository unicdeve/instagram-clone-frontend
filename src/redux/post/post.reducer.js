import postsTypes from './post.types';

const initialState = {
  posts: [],
  loading: false,
  errors: {}
};

const postsReducer = (state = initialState, action) => {
  let postIndex;
  if (action.payload) {
    postIndex = state.posts.findIndex(
      post => post.id === action.payload.postId
    );
  }

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
      state.posts[postIndex] = {
        ...state.posts[postIndex],
        likes: [...state.posts[postIndex].likes, action.payload.newLike]
      };

      return {
        ...state
      };

    case postsTypes.UNLIKE_POST:
      state.posts[postIndex] = {
        ...state.posts[postIndex],
        likes: [
          ...state.posts[postIndex].likes.filter(
            like => like.user !== action.payload.user_id
          )
        ]
      };

      return {
        ...state
      };

    case postsTypes.LIKE_COMMENT:
      const commentIndex = state.posts[postIndex].comments.findIndex(
        comment => comment.id === action.payload.commentId
      );
      state.posts[postIndex].comments[commentIndex] = {
        ...state.posts[postIndex].comments[commentIndex],
        likes: [
          ...state.posts[postIndex].comments[commentIndex].likes,
          action.payload.newLike
        ]
      };

      return {
        ...state
      };

    case postsTypes.UNLIKE_COMMENT:
      const index = state.posts[postIndex].comments.findIndex(
        comment => comment.id === action.payload.commentId
      );

      state.posts[postIndex].comments[index] = {
        ...state.posts[postIndex].comments[index],
        likes: state.posts[postIndex].comments[index].likes.filter(
          like => like.user !== action.payload.user_id
        )
      };

      return {
        ...state
      };

    case postsTypes.POST_COMMENT:
      state.posts[postIndex].comments = [
        action.payload.newComment,
        ...state.posts[postIndex].comments
      ];

      return {
        ...state
      };

    default:
      return state;
  }
};

export default postsReducer;
