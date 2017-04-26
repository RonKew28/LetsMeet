import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';

import { fetchEvent } from '../../actions/event_actions';
import { fetchGroup } from '../../actions/group_actions';
import { selectEvent } from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = (state, { params }) => {
  const eventId = parseInt(params.eventId);
  const event = selectEvent(state, eventId);
  const group = state.groups;
  const currentUser = state.session.currentUser;
  return {
    eventId,
    event,
    group,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
