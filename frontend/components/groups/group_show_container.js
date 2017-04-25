import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';

import { fetchGroup, deleteMembership, createMembership } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';

import GroupShow from './group_show';

const mapStateToProps = (state, { params }) => {
  const groupId = parseInt(params.groupId);
  const group = selectGroup(state, groupId);
  const currentUser = state.session.currentUser;
  return {
    groupId,
    group,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  createMembership: membership => dispatch(createMembership(membership)),
  deleteMembership: id => dispatch(deleteMembership(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
