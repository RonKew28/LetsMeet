import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';

import { fetchEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = (state, { params }) => {
  const eventId = parseInt(params.eventId);
  const event = selectEvent(state, eventId);
  const currentUser = state.session.currentUser;
  return {
    eventId,
    event
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
