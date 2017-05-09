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
    let upcomingEventsCount = 0;
    if(this.props.group) {
      this.props.group.events.forEach((event) => {
          let currentDate = Date.now();
          let date = new Date(event.date).toLocaleDateString();
          let time = new Date(event.time).toLocaleTimeString();
          let eventDateValue = new Date(date + " " + time).valueOf();
          if (eventDateValue > currentDate) {
            upcomingEventsCount += 1;
          }
        });


      return(
        <div className='group-sidebar-container'>
          <ul>
            <li>
              <img id="group-img" src={this.state.group.image_url} />
            </li>
            <li>
              <span>Location</span>
              <span>{this.state.group.location}</span>
            </li>
            <li>
              <span>Founded</span>
              <span>{this.state.group.formatted_date}</span>
            </li>
            <li>
              <span>Founder</span>
              <span>{this.state.group.creator.username}</span>
            </li>
            <li id='member-count-sidebar'>
              <Link to={`groups/${this.props.group.id}/members`}>
              <span># of Members</span></Link>
              <span>{this.state.group.member_count}</span>
            </li>
            <li>
              <span>Upcoming events</span>
              <span>{upcomingEventsCount}</span>
            </li>
            <li>
              <span>Our calendar</span>
              <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
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
