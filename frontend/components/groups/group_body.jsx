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
              <ul>
                <Link to={`groups/${this.props.groupId}/events/${event.id}`} ><li><h2>{event.name}</h2></li></Link>
                <li><h2>Location:</h2>{event.location_name}</li><li>{event.location_address}</li></ul></li>);
        });
    }

    return (
      <div className="group-show-content">
        <div className="group-show-content-right">
          <p>{this.props.group.description}</p>
          <ul>
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
