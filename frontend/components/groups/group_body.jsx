import React from 'react';
import { Link } from 'react-router';

class GroupBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let eventList = [];
    if (this.props.events) {
      this.props.events.forEach((event) => {
        if (event.date.valueOf() > Date.now()) {
          eventList.push(<li key={event.id}><ul>
            <Link to={`/events${event.id}`} ><li><h2>{event.name}</h2></li></Link>
            <li>{event.location_name}</li><li>{event.location_address}</li></ul></li>);
        }
      });
    }

    return (
      <ul>
        {eventList}
      </ul>

    );
  }
}

export default GroupBody;
