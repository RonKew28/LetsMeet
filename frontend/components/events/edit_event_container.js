import { connect } from 'react-redux';
import { updateEvent, deleteEvent } from '../../actions/event_actions';
import { hashHistory } from 'react-router';
import { selectEvent } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import { fetchEvent } from '../../actions/event_actions';
import EditEventForm from './edit_event_form';

const mapStateToProps = (state, { params }) => {
  const eventId = parseInt(params.eventId);
  const event = selectEvent(state, eventId);
  return {
    eventId,
    event
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateEvent: (event) => dispatch(updateEvent(event)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    fetchEvent: id => dispatch(fetchEvent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
