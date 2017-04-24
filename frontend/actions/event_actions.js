import * as EventApiUtil from "..util/events_api_util";
import { receiveErrors, clearErrors} from './error_actions';

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
    .then(event => dispatch(receiveEvent(event)),
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