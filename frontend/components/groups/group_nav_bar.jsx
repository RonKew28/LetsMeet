import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupNavBar extends React.Component {
  render() {
    <div className='group-nav-bar'>
      <div className='group-nav-name'>
        <h1>{this.props.group.name}</h1>
      </div>
      <div className='group-lower-nav'>
        <ul className='left-group-nav'>
          <li><Link to={`/groups/${this.props.group.id}`}>Home</Link></li>
          <li><Link to='/'>Members</Link></li>
          <li><Link to={`/groups/${this.props.group.id}/event/create`}>Suggest an event</Link></li>
        </ul>

        <ul className='right-group-nav'>
          <li></li>
        </ul>

      </div>
    </div>;
  }
}

export default withRouter(GroupNavBar);
