import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupShow from './group_show';
import EventShow from '../events/event_show';
import { createMembership, deleteMembership } from '../../actions/group_actions';

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
    let members = this.props.group.members;
    let memberIDs = [];
    if(this.props.group.members) {
      members = this.props.group.members;
      members.forEach( (member) => {
        memberIDs.push(member.id);
      });
    }
    if(this.props.currentUser && memberIDs.includes(this.props.currentUser.id)) {
    return(
      <button className="join-us-button" onClick={this.removeMember}>Leave group</button>
    ); } else {
      return(
        <button className="join-us-button" onClick={this.addMember}>Join us!</button>
      );
    }
  }

  toggleEditButton() {
    if (this.props.group.creator_id === this.props.currentUser.id) {
      return(
        <button onClick={this.navigateToEdit}>Edit Group</button>
      );
    } else {
        return (
          <div>{this.toggleJoinButton()}</div>
        );
      }
    }

    addMember () {
      debugger
      this.props.createMembership({group_id: this.props.group.id, member_id: this.props.currentUser.id});
    }


    removeMember () {
      this.props.deleteMembership(({group_id: this.props.group.id}));
    }


  render() {
    if(this.props.group) {
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
    } else {
      return <h1>What</h1>;
    }
  }
}

export default withRouter(GroupNavBar);
