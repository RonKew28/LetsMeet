import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class GroupSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { group: this.props.group, members: this.props.members};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({group: nextProps.group, members: nextProps.members});
  }

  render() {
    if(this.props.group) {
      return(
        <div className='group-sidebar-container'>
          <ul>
            <li>
              <span>Location</span>
              <span>{this.state.group.location_name}</span>
            </li>
            <li>
              <span>Founded</span>
              <span>{this.props.date}</span>
            </li>
            <li>
              <span># of Members</span>
              <span>{this.state.group.member_count}</span>
            </li>
            <li>
              <span>Upcoming Meetups</span>
              <span>{this.props.eventCount}</span>
            </li>
            <li>
              <span>Our calendar</span>
              <span>icon</span>
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GroupSideBar;
