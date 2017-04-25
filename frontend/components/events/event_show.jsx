import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from '../groups/group_nav_bar';
import GroupSideBar from '../groups/group_side_bar';


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
            <div className='group-show-content'>
              <GroupSideBar group={this.props.event.group} date={this.props.event.group.formatted_date} />
              <h1>{this.props.event.name}</h1>
              <p>{this.props.event.description}</p>
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
