import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/error_actions';

const _errors = {};

const ErrorsReducer = (state = _errors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, action.errors.responseJSON);
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorsReducer;
