import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class GroupMembers extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let memberList = [];
    this.props.members.forEach((member) => {
      memberList.push(
        <li key={member.id}>
          <ul>
            <li>{member.username}</li>
          </ul>
        </li>
      );

    });

    return(
      <div>
      <h1>Members:</h1>
      <ul>
        {memberList}
      </ul>
      </div>
    );
  }
}

export default GroupMembers;
