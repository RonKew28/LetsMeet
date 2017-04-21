import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP, RECEIVE_ERRORS } from '../actions/group_actions';
import { merge } from 'lodash';


const _nullGroup = {};

const GroupsReducer = (state = _nullGroup, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GROUPS:
      return action.benches;
    case RECEIVE_GROUP:
      return merge({}, state, { [action.group.id]: action.group });
    case REMOVE_GROUP:
      let newState = merge({}, state);
      delete newState[action.group.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default GroupsReducer;
