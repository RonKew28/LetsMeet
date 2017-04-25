import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupShow from './group_show';
import EventShow from '../events/event_show';

class GroupNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToEdit = this.navigateToEdit.bind(this);
    this.toggleJoinButton = this.toggleJoinButton.bind(this);
    this.toggleEditButton = this.toggleEditButton.bind(this);
  }

  navigateToEdit() {
    this.props.router.push(`/groups/${this.props.group.id}/edit`);
  }

  toggleJoinButton() {
    return(
      <button className="join-us-button">Join us!</button>
    );
  }

  toggleEditButton() {
    if (this.props.group.creator.id === this.props.currentUser.id) {
      return(
        <button onClick={this.navigateToEdit}>Edit Group</button>
      );
      } else {
        return (
          <div>{this.toggleJoinButton}</div>
        );
      }
    }

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
        </div>
        <div className='right-group-nav'>
          <span>{this.toggleEditButton()}</span>
        </div>
      </div>
    </div>
  );
  }
}

export default withRouter(GroupNavBar);
