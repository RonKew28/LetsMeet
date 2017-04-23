import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from './group_nav_bar';


class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }


  render() {
    debugger
    return(
    <h1>{this.props.group.name}</h1>
  );
  }
}

export default GroupShow;
