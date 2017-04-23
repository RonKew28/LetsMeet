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
    if (this.props.group.creator)
      return(
        <GroupNavBar group={this.props.group} />
      );
    else
      return(
      <h1>What</h1>
    );
  }
}

export default withRouter(GroupShow);
