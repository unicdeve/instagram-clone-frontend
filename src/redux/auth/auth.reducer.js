import authTypes from './auth.types';
import isEmpty from '../../util/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUser: {},
  errors: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN_START:
    case authTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true
      };

    case authTypes.SIGN_IN_SUCCESS:
    case authTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };

    case authTypes.SIGN_IN_FAILURE:
    case authTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case authTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: null
      };

    default:
      return state;
  }
};

export default authReducer;
