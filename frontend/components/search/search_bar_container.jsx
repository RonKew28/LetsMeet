import React from 'react';
import { connect } from 'react-redux';
import { fetchGroups, searchGroups } from '../../actions/group_actions';
import { fetchEvents, searchEvents } from '../../actions/event_actions';
import { Link } from 'react-router';
import SearchBar from './search_bar';


const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups()),
    searchGroups: (search) => dispatch(searchGroups(search)),
    fetchEvents: () => dispatch(fetchEvents()),
    searchEvents: (search) => dispatch(searchEvents(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
