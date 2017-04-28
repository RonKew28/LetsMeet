import React from 'react';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchGroups } from '../../actions/group_actions';
import { groupsArray } from '../../reducers/selectors';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    if(!this.props.groups) {
      return <h1>Loading</h1>;
    }

    let groupList = [];
    this.props.groups.forEach((group) => {
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
  return ({
    groups: groupsArray(state.groups),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return {fetchGroups: () => dispatch(fetchGroups())};
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(HomePage);
