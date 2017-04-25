import * as GroupAPIUtil from '../util/group_api_util';
import { receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
// export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
// export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

export const fetchGroups = () => dispatch => {
  return(
    GroupAPIUtil.fetchGroups().
    then(groups => dispatch(receiveGroups(groups)),
    err => dispatch(receiveErrors(err)))
  );
};

export const fetchGroup = id => dispatch => {
  return(
    GroupAPIUtil.fetchGroup(id)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveErrors(err)))
  );
};

export const createGroup = group => dispatch => {
  return(
    GroupAPIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveErrors(err)))
  );
};

export const updateGroup = group => dispatch => {
  return(
    GroupAPIUtil.updateGroup(group)
    .then(group => dispatch(receiveGroup(group)),
    err => dispatch(receiveErrors(err)))
  );
};

export const deleteGroup = id => dispatch => {
  return(
    GroupAPIUtil.deleteGroup(id)
    .then(group => dispatch(removeGroup(group)),
    err => dispatch(receiveErrors(err)))
  );
};

export const createMembership = membership => dispatch => {
  debugger
  return(
    GroupAPIUtil.createMembership(membership)
    .then(membership => dispatch(receiveGroup(membership)),
    err => dispatch(receiveErrors(err)))
  );
};

export const deleteMembership = id => dispatch => {
  return(
    GroupAPIUtil.deleteMembership(id)
    .then(membership => dispatch(receiveGroup(membership)),
    err => dispatch(receiveErrors(err)))
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

// const removeMembership = membership => ({
//   type: REMOVE_MEMBERSHIP,
//   membership
// });
//
// const receiveMembership = membership => ({
//   type: RECEIVE_MEMBERSHIP,
//   membership
// });
