import React from 'react';
import { Link, withRouter } from 'react-router';
import EventShow from './event_show';

class EventSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToEventEdit = this.navigateToEventEdit.bind(this);
    this.toggleRSVPButton = this.toggleRSVPButton.bind(this);
    this.toggleEventEditButton = this.toggleEventEditButton.bind(this);
  }

  navigateToEventEdit() {
    this.props.router.push(`/events/${this.props.event.id}/edit`);
  }

  toggleRSVPButton() {
    return(
      <button className="join-us-button">RSVP to Event</button>
    );
  }

  toggleEventEditButton() {
    if (this.props.event.organizer_id === this.props.currentUser.id) {
      return(
        <button onClick={this.navigateToEventEdit}>Edit Event</button>
      );
      } else {
        return (
          <div>{this.toggleRSVPButton}</div>
        );
      }
    }

  render() {
    if(this.props.event) {
    return(
    <div className='group-sidebar-container'>
      <ul>
        <li>
          <span className="red-button">{this.toggleEventEditButton()}</span>
        </li>
        <li>
          <span>Founded</span>
        </li>
        <li>
          <span># of Members</span>
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
    return <h1>Loading</h1>;
  }
  }
}

export default withRouter(EventSideBar);
