import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import { Link, withRouter, hashHistory} from 'react-router';
import { eventsArray } from '../../reducers/selectors';

class EventsSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {events: [] };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ events: nextProps.events });
  }

  compareDateValues(a, b) {
    return b - a;
  }

  render() {
    if(!this.props.events) {
      return <h1>Loading</h1>;
    }

    let eventList = [];
    let currentDate = Date.now();
    this.state.events.forEach((event) => {
      let date = new Date(event.date).toLocaleDateString();
      let time = new Date(event.time).toLocaleTimeString();
      let eventDateValue = new Date(date + " " + time).valueOf();

      if (eventDateValue > currentDate) {
        let eventItem = (
          <li key={event.id}>
            <ul className="group-event-item">
              <li><Link to={`groups/${event.group_id}/events/${event.id}`}>
                <span>{event.name}</span></Link></li>

              <li><span>{event.location_name}</span></li>
              <li><span id="event-loc-address">{event.location_address}</span></li>
                <li><span>{date}</span></li>
                <li><span>{time}</span></li>

            </ul>
          </li>);
        eventList.push([eventItem, eventDateValue]);
      }
    });

    eventList.sort( function(a, b) {
      return a[1] - b[1];
    });

    let orderedEventsList = [];
    eventList.forEach((eventItem) => {
      orderedEventsList.push(eventItem[0]);
    });



    return (
      <ul className={this.props.toggleState}>
        {orderedEventsList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: eventsArray(state.events),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsSearchResults);
