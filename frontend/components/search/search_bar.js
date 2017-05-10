import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupSearchResults from './group_search_results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleUpdateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit() {
    if (this.state.search === "") {
      this.props.fetchGroups();
    } else {
      this.props.searchGroups(this.state.search);
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {

    return(
      <div className="search-container">
        <div className="search-bar">
          <input type="text" onChange={this.handleUpdateSearch} onKeyPress={this.handleKeyPress} /> <p> Search </p>

          <GroupSearchResults />
        </div>
      </div>
    );
  }
}

export default SearchBar;
