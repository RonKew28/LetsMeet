import React from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupSearchResults from './group_search_results';

class CategorySearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: this.props.params.category, title: "" }
  }


}
