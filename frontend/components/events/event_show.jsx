import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';
import GroupSideBar from '../groups/group_side_bar';
import EventSideBar from './event_sidebar';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateRsvp = this.handleCreateRsvp.bind(this);
    this.handleDeleteRsvp = this.handleDeleteRsvp.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.event && nextProps.params.eventId !== this.props.params.eventId) {
      this.props.fetchEvent(nextProps.params.eventId);
    }
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
              <h2>Want to go?</h2>
              <h3>Your RSVP (click to change):</h3><button onClick={this.handleDeleteRsvp} className="rsvp-button">YES</button>
            </li>
          </ul>
        );
      case "nonattendee":
        return (
          <ul>
            <li>
              <h2>Want to go?</h2>
              <h3>Your RSVP (click to change):</h3><button onClick={this.handleCreateRsvp} className="rsvp-button">NO</button>
            </li>
          </ul>
        );
      default:
        return (
          <div className='rsvp-container'>
            <div>
              <h1>Want to go?</h1>
            </div>
            <div>
              <h4>Your RSVP:</h4>
              <button id="rsvp-button" onClick={this.handleCreateRsvp} className="rsvp-button">Join us!</button>
            </div>

          </div>
        );
    }
  }

  render() {

    if (!this.props.event.id) {
      return <h1>Loading</h1>;
      }
      let attendeeList = [];

    this.props.event.attendees.forEach((attendee) => {
      attendeeList.push(
          <ul key={attendee.id} className='event-member-list'>
            <li><img src={attendee.profile_pic_url} /></li>
            <li>{attendee.username}</li>
          </ul>
      );

    });
    return(
          <div className='event-show-content-container'>
            <div className='event-show-content-main'>
              <p>{this.props.event.description}</p>
            </div>
            <div className='event-show-right-bar'>
              <div className='rsvp-container'>
                { this.eventButtons() }
              </div>
              <div className='members-container'>
                <h2>{this.props.event.attendees.length} going</h2>
                {attendeeList}
              </div>
            </div>
          </div>
    );
  }
}

export default withRouter(EventShow);
