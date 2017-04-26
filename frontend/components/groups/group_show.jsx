import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupNavBar from './group_nav_bar';
import GroupSideBar from './group_side_bar';
import GroupBody from './group_body';
import GroupMembers from './group_members';



class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "home", group: this.props.group };
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  handleJoin() {
    this.props.createMembership(this.props.groupId, this.props.currentUser.id);
    this.setState({location: "welcome"});
    this.fetchGroup(this.props.groupId);
  }

  handleLeave() {
    this.props.deleteMembership(this.props.groupId);
    this.props.fetchGroup(this.props.groupId);
    this.setState({ location: "home" });
    hashHistory.push('/');
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
    this.setState({ group: this.props.group });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.groupId && nextProps.params.groupId !== this.props.groupId.toString()) {
      this.props.fetchGroup(nextProps.params.groupId);
    }
    this.setState({ group: nextProps.group });
  }

  changeLocation(newLoc) {
    return () => this.setState({ location: newLoc });
  }



  render() {

    let members = [];
    let memberIds = [];

    if (this.state.group.members) {
      members = this.state.group.members;
      members.forEach((member) => {
        memberIds.push(member.id);
      });
    }

    let joinButton = (<button onClick={this.joinGroup} className="join-us-button">Join</button>);
    if(this.props.currentUser && memberIds.includes(this.props.currentUser.id)) {
      joinButton = (<button onClick={this.changeLocation("leave")} className="join-us-button">Leave Group</button>);
    }

    let body;
    switch(this.state.location) {
      case "home":
        body = (<GroupBody events={this.state.group.events} members={members} group={this.state.group} />);
        break;
      case "members":
        body = (<GroupMembers members={this.state.group.members} />);
        break;
      case "events":
        body=(<EventListGroup changeLocation = {this.changeLocation} events={this.state.group.events} />);
        break;
    }

    let editLink = (<div />);
    if(this.state.group.creator && this.state.group.creator.id === this.props.currentUser.id) {
      let editClass = this.state.location === "edit" ? "red-button" : "";
      editLink = <li className={editClass} onClick={this.changeLocation("edit")}>Edit</li>;
    }
    let homeClass = this.state.location === "home" ? "red-button" : "";
    let memberClass = this.state.location === "members" ? "red-button" : "";
    let eventClass = this.state.location === "events" ? "red-button" : "";

    let eventCount = 0;
    if (this.state.group.events) {
      eventCount = this.state.group.events.length;
    }
    


      return(
        <div className="group-show-container">
          <div className='group-nav-bar'>
            <div className='group-nav-name'>
              <h1>{this.props.group.name}</h1>
            </div>
            <div className='group-lower-nav'>
              <div className='left-group-nav'>
                <ul>
                  <li className={homeClass} onClick={this.changeLocation("home")}>Home</li>
                  <li className={memberClass} onClick={this.changeLocation("members")}>Members</li>
                  <li className={eventClass} onClick={this.changeLocation("events")}>Events</li>
                </ul>
              </div>
              <div className='right-group-nav'>
                  {editLink}
                  {joinButton}
              </div>
            </div>
          </div>

          <div className='group-show-content'>
            <GroupSideBar group={this.state.group} members={members} eventCount={eventCount}/>
            <p>{this.props.group.description}</p>
            {body}
          </div>
        </div>
      );
    }


}


export default withRouter(GroupShow);
