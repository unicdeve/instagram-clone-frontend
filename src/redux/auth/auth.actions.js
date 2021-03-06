import axios from 'axios';
import authTypes from './auth.types';
import setAuthToken from '../../util/setAuthToken';

const setUser = (data, dispatch) => {
  localStorage.setItem('auth', JSON.stringify(data));
  setAuthToken(data.token);
  dispatch({
    type: authTypes.SIGN_IN_SUCCESS,
    payload: data
  });
};

export const signinUser = userData => dispatch => {
  dispatch({ type: authTypes.SIGN_IN_START });
  axios
    .post('/users/login/', userData)
    .then(res => {
      setUser(res.data, dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: authTypes.SIGN_IN_FAILURE,
        payload: err.response.data
      });
    });
};

export const signupUser = userData => dispatch => {
  dispatch({ type: authTypes.SIGN_UP_START });
  axios
    .post('/users/', userData)
    .then(res => {
      setUser(res.data, dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: authTypes.SIGN_UP_FAILURE,
        payload: err.response.data
      });
    });
};

export const getCurrentUserProfile = userId => dispatch => {
  axios
    .get(`/profiles/details?user=${userId}`)
    .then(res => {
      dispatch({
        type: authTypes.SET_CURRENT_USER_PROFILE,
        payload: res.data[0]
      });
    })
    .catch(err => {
      dispatch({
        type: authTypes.SET_CURRENT_USER_PROFILE,
        payload: {}
      });
    });
};

export const clearErrors = () => ({
  type: authTypes.CLEAR_ERROR
});
