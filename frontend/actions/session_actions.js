import * as APIUtil from '../util/session_api_util';
import { clearErrors, receiveErrors } from './error_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err)))
);

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => {
        dispatch(receiveErrors(err));
      });
};

export const logout = () => dispatch => {
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)));
  hashHistory.push('/');
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
