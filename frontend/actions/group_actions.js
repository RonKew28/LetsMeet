import * as GroupAPIUtil from '../util/group_api_util';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from './error_actions';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const fetchGroups = () => dispatch => {
  return(
    GroupAPIUtil.fetchGroups().
    then(groups => dispatch(receiveGroups(groups)),
    err => dispatch(receiveError(err)))
  );
};

export const fetchGroup = id => dispatch => {
  return(
    GroupAPIUtil.fetchGroup(id)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveError(err)))
  );
};

export const createGroup = group => dispatch => {
  return(
    GroupAPIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveError(err)))
  );
};

export const updateGroup = group => dispatch => {
  return(
    GroupAPIUtil.updateGroup(group)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveError(err)))
  );
};

export const deleteGroup = id => dispatch => {
  return(
    GroupAPIUtil.deleteGroup(id)
    .then(group => dispatch(removeGroup(group)),
    err => dispatch(receiveError(err)))
  );
};

const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});
