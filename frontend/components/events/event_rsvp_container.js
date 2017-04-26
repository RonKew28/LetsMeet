import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';
import {createRsvp, deleteRsvp} from '../../actions/event_actions';
import { createMembership } from '../../actions/group_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRsvp: (eventId, memberId) => dispatch(createRsvp(eventId, memberId)),
    deleteRsvp: (id) => dispatch(deleteRsvp(id)),
    createMembership: (groupId, userId) => dispatch(createMembership(groupId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventRsvp);
