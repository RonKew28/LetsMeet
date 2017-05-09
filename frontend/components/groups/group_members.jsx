import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectGroup } from '../../reducers/selectors';
import { fetchGroup } from '../../actions/group_actions';

class GroupMembers extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }
  render() {
    if(!this.props.group) {
      return <h1>Loading</h1>;
    }

    let memberList = [];
    memberList.push(
      <li>
        <div className='group-member-list'>
        <ul>
          <li><h1 id="member-header">Members:</h1></li>
        </ul>
        </div>
      </li>
    );
    this.props.group.members.forEach((member) => {
      memberList.push(
        <li key={member.id}>
          <div className='group-member-list'>
          <ul>
            <li className="member-pic"><img src={member.profile_pic_url}/></li>
            <li className='member-name'>{member.username}</li>
          </ul>
          </div>
        </li>
      );

    });

    return(
      <div className="event-show-content-main">
      <ul>
        <div className="group-member-container">
          {memberList}
        </div>
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.params.groupId);
  const group = selectGroup(state, groupId);

  return {
    groupId,
    group
  };
};

const mapDispatchToProps = (dispatch) => {
  return {fetchGroup: id => dispatch(fetchGroup(id))};
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(GroupMembers);
