import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupShow from './group_show';
import EventShow from '../events/event_show';

class GroupNavBar extends React.Component {

  render() {
    return(
    <div className='group-nav-bar'>
      <div className='group-nav-name'>
        <h1>{this.props.group.name}</h1>
      </div>
      <div className='group-lower-nav'>
        <div className='left-group-nav'>
          <span><Link to={`/groups/${this.props.group.id}`}>Home</Link></span>
          <span><Link to='/'>Members</Link></span>
          <span>{this.props.editButton}</span>
        </div>
        <div className='right-group-nav'>
          <span><button className="join-us-button">Join us!</button></span>
        </div>
      </div>
    </div>
  );
  }
}

export default withRouter(GroupNavBar);
