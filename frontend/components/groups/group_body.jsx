import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectGroup } from '../../reducers/selectors';
import { fetchGroup } from '../../actions/group_actions';

class GroupBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventListSection: "upcoming" };
    this.upcoming = this.upcoming.bind(this);
    this.past = this.past.bind(this);
    this.upcomingSelector = this.upcomingSelector.bind(this);
    this.pastSelector = this.pastSelector.bind(this);

  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  upcoming() {
    this.setState({ eventListSection: "upcoming" });
  }

  past() {
    this.setState({ eventListSection: "past" });
  }

  upcomingSelector() {
    return this.state.eventListSection === "upcoming" ? "selected" : "";
  }

  pastSelector() {
    return this.state.eventListSection === "past" ? "selected" : "";
  }


  render() {
    if(!this.props.group) {
      return <h1>Loading</h1>;
    }
    let eventList = [];
    let upcomingEvents = [];
    let pastEvents = [];
    let currentDate = Date.now();


    if (this.props.group.events) {
      this.props.group.events.forEach((event) => {
          let date = new Date(event.date).toLocaleDateString();
          let time = new Date(event.time).toLocaleTimeString();
          let eventDateValue = new Date(date + " " + time).valueOf();

          let eventItem = (
            <li key={event.id}>
              <ul className="group-event-item">
                <li id="hello"><Link to={`groups/${this.props.groupId}/events/${event.id}`}>
                  <span id="this">{event.name}</span></Link></li>

                <li><span>{event.location_name}</span></li>
                <li><span id="event-loc-address">{event.location_address}</span></li>
                  <li><span>{date}</span></li>
                  <li><span>{time}</span></li>

              </ul>
            </li>);

            if (eventDateValue < currentDate) {
              pastEvents.push(eventItem);
            } else {
              upcomingEvents.push(eventItem);
            }
        });
    }

    if (this.state.eventListSection === "past") {
      eventList = pastEvents;
    } else {
      eventList = upcomingEvents;
    }



    return (
      <div className="group-show-content">
        <div className="group-show-content-right">
          <p id="event-description">{this.props.group.description}</p>
          <ul className="event-list-container">
            <ul className="event-list-buttons">
              <li className={this.upcomingSelector()} onClick={this.upcoming}>Upcoming Events ({upcomingEvents.length})</li>
              <li className={this.pastSelector()} onClick={this.past}>Past Events ({pastEvents.length})</li>
            </ul>
            {eventList}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.params.groupId);
  const group = selectGroup(state, groupId);

  return {
    groupId,
    group
  };
};

const mapDispatchToProps = (dispatch) => {
  return {fetchGroup: id => dispatch(fetchGroup(id))};
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(GroupBody);
