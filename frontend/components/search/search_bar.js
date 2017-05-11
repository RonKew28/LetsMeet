import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupSearchResults from './group_search_results';
import EventSearchResults from './event_search_results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", eventsResultsDisplay: false };
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleEventsResults = this.toggleEventsResults.bind(this);
    this.toggleGroupsResults = this.toggleGroupsResults.bind(this);
    this.showEventsResults = this.showEventsResults.bind(this);
    this.showGroupsResults = this.showGroupsResults.bind(this);
  }

  handleUpdateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit() {
    if (this.state.search === "") {
      this.props.fetchGroups();
      this.props.fetchEvents();
    } else {
      this.props.searchGroups(this.state.search);
      this.props.searchEvents(this.state.search);
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  }

  showEventsResults() {
    this.setState({ eventsResultsDisplay: true });
  }

  showGroupsResults() {
    this.setState({ eventsResultsDisplay: false });
  }


  toggleEventsResults() {
    return this.state.eventsResultsDisplay === true ? "events-search-results-items" : "search-hidden";
  }

  toggleGroupsResults() {
    return this.state.eventsResultsDisplay === true ? "search-hidden" : "groups-search-results-items";
  }


  render() {

    return(
      <div className="search-main">
        <div className="search-container flexthis">
          <div className="search-bar">
            <div className="search-bar-left">
              <input className="search-input" type="text" onChange={this.handleUpdateSearch} onKeyPress={this.handleKeyPress} value={this.state.search}/>
              <label>Search</label>
          </div>
            <div className="search-bar-right">
              <button onClick={this.showGroupsResults} className="search-button">Groups</button>
              <button onClick={this.showEventsResults} className="search-button">Calendar</button>
            </div>
          </div>
            <div>
              <GroupSearchResults toggleState={this.toggleGroupsResults()} />
              <EventSearchResults toggleState={this.toggleEventsResults()} groups={this.props.groups} />
            </div>
          </div>
        </div>
    );
  }
}

export default SearchBar;
