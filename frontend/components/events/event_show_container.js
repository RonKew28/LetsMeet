import { connect } from 'react-redux';

import { clearErrors } from '../../actions/error_actions';

import { fetchEvent, createRsvp, deleteRsvp } from '../../actions/event_actions';
import { fetchGroup } from '../../actions/group_actions';
import { selectEvent } from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  const event = state.events[ownProps.params.eventId];
  const currentUser = state.session.currentUser;

  let attendees = [];
  let attendeeIds = [];

  if (event.attendees) {
    attendees = event.attendees;
    attendees.forEach((attendee) => {
      attendeeIds.push(attendee.id);
    });
  }

  let attendeeType;

  if (currentUser && currentUser.id === event.organizer_id) {
    attendeeType = "organizer";
  } else if (currentUser && attendeeIds.includes(currentUser.id)) {
    attendeeType = "attendee";
  } else if (currentUser) {
    attendeeType = "nonattendee";
  }
  return {
    attendeeType,
    event,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  createRsvp: id => dispatch(createRsvp(id)),
  deleteRsvp: id => dispatch(deleteRsvp(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
