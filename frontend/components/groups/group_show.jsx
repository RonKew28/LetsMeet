import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupNavBar from './group_nav_bar';
import GroupSideBar from './group_side_bar';
import GroupBody from './group_body';
import GroupMembers from './group_members';



class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.homeSelector = this.homeSelector.bind(this);
    this.memberSelector = this.memberSelector.bind(this);
    this.groupButtons = this.groupButtons.bind(this);

  }

  homeSelector() {
    return this.props.location.pathname.slice(-7) !== "members" ? "left-group-nav-selected" : "";
  }

  memberSelector() {
    return this.props.location.pathname.slice(-7) === "members" ? "left-group-nav-selected" : "";
  }


  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.groupId && nextProps.params.groupId !== this.props.groupId.toString()) {
      this.props.fetchGroup(nextProps.params.groupId);
    }
  }

  handleLeave() {
    this.props.deleteMembership(this.props.groupId).then(() => {
      this.props.router.push(`groups/${this.props.groupId}`);
    });
  }
  handleJoin() {
    if(!this.props.currentUser) {
      this.props.router.push("/login");
    } else {
        this.props.createMembership(this.props.groupId, this.props.currentUser.id).then(() => {
          this.props.router.push(`groups/${this.props.groupId}`);
      });
    }
  }

  groupButtons() {
    let editGroupLink = <li className="join-us-button"><Link to={`groups/${this.props.group.id}/edit`}>Edit group</Link></li>;
    let createEventLink = <li className="join-us-button"><Link to={`groups/${this.props.group.id}/events/new`}>Create Event</Link></li>;
    let joinButton = <li className="join-us-button"><button onClick={this.handleJoin}>Join</button></li>;
    let leaveGroupButton = <li className="join-us-button"><button onClick={this.handleLeave}>Leave Group</button></li>;

    switch(this.props.memberType) {
      case 'owner':
        return (
          <ul className="right-group-nav">
            { editGroupLink }
            { createEventLink }
          </ul>
        );
      case 'member':
        return (
          <ul className="right-group-nav">
            { leaveGroupButton }
            { createEventLink }
          </ul>
        );
      case 'nonmember':
        return (
          <ul className="right-group-nav">
            { joinButton }
          </ul>
        );
    }
  }

  render() {
    if(!this.props.group) {
      return <h1>Loading</h1>;
    }
    let membersLink = <Link to={`groups/${this.props.group.id}/members`}>Members</Link>;
    let homeLink = <Link to={`groups/${this.props.group.id}`}>Home</Link>;

    if(this.props.group) {
      return(
        <div className="group-show-container">
          <div className='group-nav-bar'>
            <div className='group-nav-name'>
              <h1>{this.props.group.name}</h1>
            </div>
            <div className='group-lower-nav'>
              <div className='left-group-nav'>
                <ul>
                  <li className={this.homeSelector()}>{homeLink}</li>
                  <li className={this.memberSelector()}>{membersLink}</li>
                </ul>
              </div>
              <div className='right-group-nav'>
                <ul className='right-group-nav'>
                { this.groupButtons() }
                </ul>
              </div>
            </div>
          </div>

          <div className='group-show-content'>
            <GroupSideBar group={this.props.group} />
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return <h1> Loading </h1>;
    }
  }
}


export default GroupShow;
