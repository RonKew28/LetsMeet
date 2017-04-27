import * as EventAPIUtil from "../util/event_api_util";
import { receiveErrors, clearErrors} from './error_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const fetchEvents = () => dispatch => {
  return(
    EventAPIUtil.fetchEvents().
    then(events => dispatch(receiveEvents(events)),
    err => dispatch(receiveErrors(err)))
  );
};

export const fetchEvent = id => dispatch => {
  return(
    EventAPIUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err)))
  );
};

export const createEvent = event => dispatch => {
  return(
    EventAPIUtil.createEvent(event)
    .then(event => {
      return dispatch(receiveEvent(event));
    },
    err => dispatch(receiveErrors(err)))
  );
};

export const updateEvent = event => dispatch => {
  return(
    EventAPIUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err)))
  );
};

export const deleteEvent = id => dispatch => {
  return(
    EventAPIUtil.deleteEvent(id)
    .then(event => dispatch(removeEvent(event)),
    err => dispatch(receiveErrors(err)))
  );
};

export const createRsvp = (eventId) => {
  return (dispatch) => {
    return EventAPIUtil.createRsvp(eventId)
    .then(event => dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err)));
  };
};

export const deleteRsvp = (id) => {
  return (dispatch) => {
    return EventAPIUtil.deleteRsvp(id)
    .then(event => dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err)));
  };
};

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const removeEvent = event => ({
  type: REMOVE_EVENT,
  event
});
