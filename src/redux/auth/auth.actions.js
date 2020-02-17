import axios from 'axios';
import authTypes from './auth.types';
import setAuthToken from '../../util/setAuthToken';

export const signinUser = userData => dispatch => {
  dispatch({ type: authTypes.SIGN_IN_START });
  axios
    .post('/users/login/', userData)
    .then(res => {
      localStorage.setItem('auth', JSON.stringify(res.data));
      setAuthToken(res.data.token);
      dispatch({
        type: authTypes.SIGN_IN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: authTypes.SIGN_IN_FAILURE,
        payload: err.response.data
      });
    });
};

export const clearErrors = () => ({
  type: authTypes.CLEAR_ERROR
});
