import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import postsReducer from './post/post.reducer';

// reducers import
const rootReducer = combineReducers({
  auth: authReducer,
  post: postsReducer
});

export default rootReducer;
