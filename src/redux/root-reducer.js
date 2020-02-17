import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';

// reducers import
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
