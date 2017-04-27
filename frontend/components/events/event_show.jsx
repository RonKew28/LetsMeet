import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';
import GroupSideBar from '../groups/group_side_bar';
import EventSideBar from './event_sidebar';


class EventShow extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.handleCreateRsvp = this.handleCreateRsvp.bind(this);
    this.handleDeleteRsvp = this.handleDeleteRsvp.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.event.id);
  }

  componentWillMount() {
    this.props.fetchEvent(this.props.event.id);
  }


  handleCreateRsvp() {
    this.props.createRsvp(this.props.event.id);
  }

  handleDeleteRsvp() {
    this.props.deleteRsvp(this.props.event.id);
  }

  eventButtons() {
    switch(this.props.attendeeType) {
      case 'organizer':
        return (
          <ul>
            <li><Link to={`events/${this.props.event.id}/edit`} className="join-us-button">Edit event</Link></li>
          </ul>
        );
      case 'attendee':
        return (
          <ul>
            <li>
              <span>Your RSVP:</span>
              <span><button onClick={this.handleDeleteRsvp} className="join-us-button">YES</button></span>
            </li>
          </ul>
        );
      case "nonattendee":
        return (
          <ul>
            <li>
              <span>Your RSVP:</span>
              <span><button onClick={this.handleCreateRsvp} className="join-us-button">NO</button></span>
            </li>
          </ul>
        );
    }
  }

  render() {
    if (this.props.event) {
      return(
        <div className='group-show-container'>
            <div className='group-show-content'>
              <div className='event-show-content-main'>
                { this.eventButtons() }
              </div>
            </div>
        </div>
      );
    } else {
        return(
        <h1> Loading </h1>
      );
    }
  }
}

export default withRouter(EventShow);
