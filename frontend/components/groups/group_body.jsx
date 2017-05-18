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


          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let eventName = event.name;
          let date2 = new Date(event.date);
          let dayOfWeek = days[date2.getDay()];
          let month = months[date2.getMonth()];
          let day = date2.getDate();
          let year = date2.getFullYear();
          let dateString = dayOfWeek + ", " + month + " " + day + ", " + year;

          let time2 = new Date(event.time).toLocaleTimeString();
          let timeOfDay = time2.slice(-3);
          let timeIdx = time2.length -6;
          let timeString = time2.substring(0, timeIdx) + timeOfDay;

          let locationName = event.location_name;
          let locationAddress = event.location_address;




          let eventItem = (
            <li key={event.id}>
              <ul className="group-event-item">
                <li id="hello"><Link to={`groups/${this.props.groupId}/events/${event.id}`}>
                  <span id="this">{event.name}</span></Link></li>

                    <div className='group-show-date-loc'>
                      <div className='group-show-date-icon'>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      </div>
                      <br/>
                      <ul className="group-show-date-loc-info">
                        <li>{dateString}</li>
                        <li>{timeString}</li>
                      </ul>
                    </div>
                    <div className='group-show-date-loc'>
                      <div className='group-show-loc-icon'>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <br/>
                      <ul className="group-show-date-loc-info">
                        <li>{locationName}</li>
                        <li>{locationAddress}</li>
                      </ul>
                    </div>

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
