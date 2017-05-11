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
    let nextSevenDays = {};
    for(let i = 0; i < 7; i++) {
      let day = new Date().getDate() + i;
      let dateItem = new Date(new Date().setDate(day)).toDateString();
      nextSevenDays[dateItem] = [];
    }



    let eventList = [];
    let currentDate = Date.now();


    this.state.events.forEach((event) => {
      let date = new Date(event.date).toLocaleDateString();
      let time = new Date(event.time).toLocaleTimeString();
      let eventDateValue = new Date(date + " " + time).valueOf();
      let lastDate = new Date(new Date().setDate(new Date().getDate() + 6));

      let dateStr = new Date(event.date).toDateString();

      if (eventDateValue > currentDate && new Date(dateStr)<= lastDate) {
        let eventItem = (
          <li key={event.id}>
            <ul className="day-events">
              <li id="hello"><Link to={`groups/${event.group_id}/events/${event.id}`}>
                <span>{event.name}</span></Link></li>

              <li><span>{event.location_name}</span></li>
              <li><span id="event-loc-address">{event.location_address}</span></li>
                <li><span>{date}</span></li>
                <li><span>{time}</span></li>

            </ul>
          </li>);

        nextSevenDays[dateStr].push(eventItem);
      }
    });

    let fullCalendar = [];
    Object.keys(nextSevenDays).forEach((day) => {
      let dayItem = (
        <div className="search-day-container">
          <h1 id="search-day">{day}</h1>
          {nextSevenDays[day]}
        </div>
      );
      fullCalendar.push(dayItem);
    });




    return (
      <ul className={this.props.toggleState}>
        {fullCalendar}
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
