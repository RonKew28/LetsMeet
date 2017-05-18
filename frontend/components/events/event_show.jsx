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
              <h3>RSVP (click to change):</h3><button onClick={this.handleDeleteRsvp} className="rsvp-button">YES</button>
            </li>
          </ul>
        );
      case "nonattendee":
        return (
          <ul>
            <li>
              <h2>Want to go?</h2>
              <h3>RSVP (click to change):</h3><button onClick={this.handleCreateRsvp} className="rsvp-button">NO</button>
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
              <h3>RSVP:</h3>
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

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let eventName = this.props.event.name;
    let date = new Date(this.props.event.date);
    let dayOfWeek = days[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let dateString = dayOfWeek + ", " + month + " " + day + ", " + year;

    let time = new Date(this.props.event.time).toLocaleTimeString();
    let timeOfDay = time.slice(-3);
    let timeIdx = time.length -6;
    let timeString = time.substring(0, timeIdx) + timeOfDay;

    let locationName = this.props.event.location_name;
    let locationAddress = this.props.event.location_address;

    return(
          <div className='event-show-content-container'>
            <div className='event-show-content-main'>
              <h1>{eventName}</h1>
              <br/>
              <div className='event-show-date-loc'>
                <div className='event-show-date-icon'>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <br/>
                <ul className="event-show-date-loc-info">
                  <li>{dateString}</li>
                  <li>{timeString}</li>
                </ul>
              </div>
              <div className='event-show-date-loc'>
                <div className='event-show-loc-icon'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <br/>
                <ul className="event-show-date-loc-info">
                  <li>{locationName}</li>
                  <li>{locationAddress}</li>
                </ul>
              </div>
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
