import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupNavBar from './group_nav_bar';
import GroupSideBar from './group_side_bar';


class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEditButton = this.toggleEditButton.bind(this);
    this.navigateToEdit = this.navigateToEdit.bind(this);
    this.toggleJoinButton = this.toggleJoinButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
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
    if (this.props.group.creator.id === currentUser.id) {
      return(
        <button onClick={this.navigateToEdit}>Edit Group</button>
      );
      } else {
        return (
          <div>{this.toggleJoinButton()}</div>
        );
      }
    }


  render() {
    if (this.props.group.creator) {
      return(
        <div className="group-show-container">
          <GroupNavBar group={this.props.group} editButton={this.toggleEditButton} />
          <div className='group-show-content'>
            <GroupSideBar group={this.props.group} date={this.props.group.formatted_date} />
            <p>{this.props.group.description}</p>
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

export default withRouter(GroupShow);
