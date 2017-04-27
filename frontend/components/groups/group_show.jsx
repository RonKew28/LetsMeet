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
    this.props.createMembership(this.props.groupId, this.props.currentUser.id).then(() => {
      this.props.router.push(`groups/${this.props.groupId}`);
    });
  }

  groupButtons() {
    switch(this.props.memberType) {
      case 'owner':
        return (
          <ul>
            <li><Link to={`groups/${this.props.group.id}/edit`} className="join-us-button">Edit group</Link></li>
            <li><Link to={`groups/${this.props.group.id}/events/new`} className="join-us-button">Create Event</Link></li>
          </ul>
        );
      case 'member':
        return (
          <ul>
            <li><button onClick={this.handleLeave} className="join-us-button">Leave Group</button></li>
            <li><Link to={`groups/${this.props.group.id}/events/new`} className="join-us-button">Create an Event</Link></li>
          </ul>
        );
      case 'nonmember':
        return (
          <ul>
            <li><button onClick={this.handleJoin} className="join-us-button">Join</button></li>
          </ul>
        );
    }
  }

  render() {
    let membersLink = <Link to={`groups/${this.props.group.id}/members`}>Members</Link>;
    let homeLink = <Link to={`groups/${this.props.group.id}`}>Home</Link>;

    if(this.props.group) {
      return(
        <div className="group-show-container">
          <div className='group-nav-bar'>
            <div className='group-nav-name'>
              <img id="group-img" src={this.props.group.image_url} />
              <h1>{this.props.group.name}</h1>
            </div>
            <div className='group-lower-nav'>
              <div className='left-group-nav'>
                <ul>
                  <li>{homeLink}</li>
                  <li>{membersLink}</li>
                </ul>
              </div>
              <div className='right-group-nav'>
                { this.groupButtons() }
              </div>
            </div>
          </div>

          <div className='group-show-content'>
            <p>{this.props.group.description}</p>
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
