import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import GroupNavBar from './group_nav_bar';
import GroupSideBar from './group_side_bar';
import GroupBody from './group_body';
import GroupMembers from './group_members';



class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { navigation: "home", group: this.props.group };
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.navigateToEdit = this.navigateToEdit.bind(this);
  }

  navigateToEdit() {
    this.props.router.push(`/groups/${this.props.group.id}/edit`);
  }

  handleJoin() {
    this.props.createMembership(this.props.groupId, this.props.currentUser.id).then(() => {
      this.setState({navigation: "home"});
    });
  }

  handleLeave() {
    this.props.deleteMembership(this.props.groupId).then(() => {
      this.props.router.push('/');
    })
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.groupId && nextProps.params.groupId !== this.props.groupId.toString()) {
      this.props.fetchGroup(nextProps.params.groupId);
    }
  }

  changeLocation(newLoc) {
    return () => this.setState({ navigation: newLoc });
  }



  render() {

    let members = [];
    let memberIds = [];

    if (this.props.group.members) {
      members = this.props.group.members;
      members.forEach((member) => {
        memberIds.push(member.id);
      });
    }

    let joinButton = (<button onClick={this.handleJoin} className="join-us-button">Join</button>);
    if(this.props.currentUser && memberIds.includes(this.props.currentUser.id)) {
      joinButton = (<button onClick={this.handleLeave} className="join-us-button">Leave Group</button>);
    }

    let mainContent;
    if(this.state.navigation === "home" ) {
      mainContent = (<GroupBody events={this.props.group.events} members={members} group={this.props.group} />);
    } else if(this.state.navigation === "members") {
      mainContent = (<GroupMembers members={this.props.group.members} />);
    } else if(this.state.navigation === "events") {
      mainContent = (<EventListGroup changeLocation = {this.changeLocation} events={this.props.group.events} />);
    }

    let editLink = (<div />);
    if(this.props.group.creator && this.props.group.creator.id === this.props.currentUser.id) {
      let editClass = this.state.navigation === "edit" ? "red-button" : "";
      editLink = <li className={editClass} onClick={this.navigateToEdit}>Edit</li>;
    }
    let homeClass = this.state.navigation === "home" ? "red-button" : "unclicked button";
    let memberClass = this.state.navigation === "members" ? "red-button" : "unclicked button";
    let eventClass = this.state.navigation === "events" ? "red-button" : "";

    let eventCount = 0;
    if (this.props.group.events) {
      eventCount = this.props.group.events.length;
    }




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
            <GroupSideBar group={this.props.group} members={members} eventCount={eventCount}/>
            <p>{this.props.group.description}</p>
            {mainContent}
          </div>
        </div>
      );
    } else {
      return <h1>What</h1>
    }
  }


}


export default GroupShow;
