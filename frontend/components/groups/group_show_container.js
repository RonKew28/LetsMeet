import React from 'react';

import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';

import { fetchGroup, deleteMembership, createMembership } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';

import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.params.groupId);
  const group = selectGroup(state, groupId);
  const currentUser = state.session.currentUser;
  let members = [];
  let memberIds = [];

  let memberType;
  if (group) {
    members = group.members;
    members.forEach((member) => {
      memberIds.push(member.id);
    });
    if (currentUser && currentUser.id === group.creator_id) {
      memberType = "owner";
    } else if (currentUser && memberIds.includes(currentUser.id)) {
      memberType = "member";
    } else {
      memberType = "nonmember";
    }
  }




  return {
    memberType,
    group,
    groupId,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  createMembership: (groupId, memberId) => dispatch(createMembership(groupId, memberId)),
  deleteMembership: id => dispatch(deleteMembership(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
