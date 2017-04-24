import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import GroupsReducer from './groups_reducer';
import EventsReducer from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  events: EventsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
