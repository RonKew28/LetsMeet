import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';


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
        <div>
          <GroupNavBar group={this.props.event.group} currentUser={currentUser} />
          <h1>{this.props.event.name}</h1>
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
