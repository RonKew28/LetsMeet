import React from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { Link, withRouter, hashHistory} from 'react-router';
import { groupsArray } from '../../reducers/selectors';

class GroupSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groups: [] };
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ groups: nextProps.groups });
  }

  render() {
    if(!this.props.groups) {
      return <h1>Loading</h1>;
    }

    let groupList = [];
    this.state.groups.forEach((group) => {
      groupList.push(
        <li className="welcome-group-container" key={group.id}>
          <ul className='welcome-img-container'>
            <li id="hello"><Link to={`groups/${group.id}/`}>
            <img id="welcome-group-img" src={group.image_url}/>
            <h2 id="welcome-img-txt">{group.name}</h2>
            </Link>
            </li>
          </ul>
        </li>);
    });

    return (
      <ul className='flexthis'>
        {groupList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: groupsArray(state.groups),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupSearchResults);
