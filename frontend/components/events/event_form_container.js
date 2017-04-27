import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import EventForm from './event_form';


const mapStateToProps = (state, ownProps) => ({
  group_id: ownProps.params.groupId
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: event => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
