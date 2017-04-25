import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';
import GroupSideBar from '../groups/group_side_bar';
import EventSideBar from './event_sidebar';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }


  render() {
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
