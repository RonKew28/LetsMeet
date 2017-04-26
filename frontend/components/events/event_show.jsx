import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';
import GroupSideBar from '../groups/group_side_bar';
import EventSideBar from './event_sidebar';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "home", event: this.props.event, user: this.props.currentUser, group: this.props.group };
    this.changeLocation = this.changeLocation.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
    this.setState({ event: this.props.event });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.eventId && nextProps.eventId != this.props.eventId.toString()){
      this.props.fetchEvents(nextProps.eventId);
    }
    this.setState({ event: nextProps.event });
    if (this.state.group && nextProps.event.group && this.state.group.id != nextProps.event.group.id) {
      this.props.fetchGroup(nextProps.event.group.id);
    }
    this.setState({ group: nextProps.group, location: "home" });
  }

  chnageLocation(newLoc) {
    return () => this.setState({ location: newLoc });
  }


  render() {
    let attendeeList = [];
    let attendeeIds=[];
    if(this.state.event.attendees) {
      this.state.event.attendees.forEach( attendee => {
        attendeeIds.push(attendee.id);
        attendeeList.push(
          <li key={attendee.id}>
            {attendee.username}
          </li>
        );
      });
    }

    let memberIds = [];
    if (this.state.group.members) {
      this.state.group.members.forEach(member => {
        memberIds.push(member.id)
      })
    }

    let body;
    switch(this.state.location) {
      case "home":

    }
    if (this.props.event) {
      return(
        <div className='group-show-container'>
          <GroupNavBar group={this.props.event.group} currentUser={currentUser} />
            <div className='group-show-content'>
              <GroupSideBar group={this.props.event.group} date={this.props.event.group_founded_date} />
              <div className='event-show-content-main'>
                <h1>{this.props.event.name}</h1>
                <h2>{this.props.event.date}</h2>
                <h2>{this.props.event.time}</h2>
                <h3>{this.props.event.location_name}</h3>
                <h3>{this.props.event.location_address}</h3>
                <p>{this.props.event.description}</p>
              </div>
              <EventSideBar event={this.props.event} currentUser={currentUser} />
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

export default withRouter(EventShow);
