import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT, RECEIVE_ERRORS } from '../actions/event_actions';
import { merge } from 'lodash';


const _nullEvent = {};

const EventsReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event });
    case REMOVE_EVENT:
      let newState = merge({}, state);
      delete newState[action.event.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default EventsReducer;
