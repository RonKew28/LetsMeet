import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from './group_nav_bar';
import GroupSideBar from './group_side_bar';


class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }


  render() {
    if (this.props.group.creator) {
      return(
        <div className="group-show-container">
          <GroupNavBar group={this.props.group} currentUser={currentUser} />
          <div className='group-show-content'>
            <GroupSideBar group={this.props.group} date={this.props.group.formatted_date} />
            <p>{this.props.group.description}</p>
          </div>
        </div>
      );
    } else {
      return(
      <h1>What</h1>
    );
  }


}
}

export default withRouter(GroupShow);
