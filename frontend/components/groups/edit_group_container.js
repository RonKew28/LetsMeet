import { connect } from 'react-redux';
import { updateGroup, deleteGroup } from '../../actions/group_actions';
import { hashHistory } from 'react-router';
import { selectGroup } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import { fetchGroup } from '../../actions/group_actions';
import EditGroupForm from './edit_group_form';

const mapStateToProps = (state, { params }) => {
  const groupId = parseInt(params.groupId);
  const group = selectGroup(state, groupId);
  return {
    groupId,
    group
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateGroup: (group) => dispatch(updateGroup(group)),
    deleteGroup: (id) => dispatch(deleteGroup(id)),
    fetchGroup: id => dispatch(fetchGroup(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupForm);
