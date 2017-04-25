import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupShow from './group_show';

class GroupSideBar extends React.Component {

  navigateToEdit() {
    this.props.router.push(`/groups/${this.props.group.id}`);
  }

  toggleEditButton() {
    if (this.props.group.creator_id === currentUser.id) {
      return(
        <button onClick={this.navigateToEdit}>Edit Group</button>
      );
    }
  }

  render() {
    if(this.props.group) {
    return(
    <div className='group-sidebar-container'>
      <ul>
        <li>
          <span>Location</span>
          <span>{this.props.group.location}</span>
        </li>
        <li>
          <span>Founded</span>
          <span>{this.props.date}</span>
        </li>
        <li>
          <span># of Members</span>
          <span>{this.props.group.member_count}</span>
        </li>
        <li>
          <span>Upcoming Meetups</span>
          <span>13</span>
        </li>
        <li>
          <span>Past Meetups</span>
          <span>10</span>
        </li>
        <li>
          <span>Our calendar</span>
          <span>icon</span>
        </li>
      </ul>
    </div>
  );
  } else {
    return <h1>What</h1>;
  }
  }
}

export default withRouter(GroupSideBar);
