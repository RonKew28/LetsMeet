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

    this.props.group.members.forEach((member) => {
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
