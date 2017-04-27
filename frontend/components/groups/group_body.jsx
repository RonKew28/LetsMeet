import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectGroup } from '../../reducers/selectors';
import { fetchGroup } from '../../actions/group_actions';

class GroupBody extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  render() {
    if(!this.props.group) {
      return <h1>Loading</h1>;
    }

    let eventList = [];
    if (this.props.group.events) {
      this.props.group.events.forEach((event) => {

          eventList.push(
            <li key={event.id}>
              <ul className="group-event-item">
                <li id="hello"><Link to={`groups/${this.props.groupId}/events/${event.id}`}>
                  <span id="this">{event.name}</span></Link></li>

                <li><span>{event.location_name}</span></li>
                <li><span id="event-loc-address">{event.location_address}</span></li>
              </ul>
            </li>);
        });
    }

    return (
      <div className="group-show-content">
        <div className="group-show-content-right">
          <p id="event-description">{this.props.group.description}</p>
          <ul className="event-list-container">
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
