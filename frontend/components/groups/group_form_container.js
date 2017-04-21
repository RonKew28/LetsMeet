import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import { clearErrors } from '../../actions/error_actions';
import GroupForm from './group_form';


const mapStateToProps = ({ groups, errors }) => ({
  errors
})

const mapDispatchToProps = (dispatch) => ({
  createGroup: group => dispatch(createGroup(group)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
