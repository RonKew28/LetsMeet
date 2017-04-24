import React from 'react';
import { Link, withRouter } from 'react-router';

class EditGroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.group.name,
      category: this.props.group.category,
      location: this.props.group.location,
      description: this.props.group.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.group !== newProps) {
      this.setState({
        name: newProps.group.name,
        description: newProps.group.description,
        location: newProps.group.location,
        category: newProps.group.category
      });
    }
  }

  handleDelete() {
    this.props.deleteGroup(this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGroup = this.state;
    this.props.createGroup(newGroup)
      .then((result) => {
        this.props.router.push(`groups/${result.group.id}`);
      });
  }

  render() {
    if(this.props.group.name) {
    return(
      <div className='edit-group-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type='text'
                 value={this.state.name}
                 onChange={this.update("name")} />
          <label>Category</label>
          <input type='text'
                 value={this.state.name}
                 onChange={this.update("category")} />
          <label>Location</label>
          <input type='text'
                 value={this.state.location}
                 onChange={this.update("location")} />
          <label>Description</label>
          <input type='text'
                 value={this.state.description}
                 onChange={this.update("description")} />
           <input type='submit' value='Update Group Info' />
        </form>
      </div>
    );
  }
    else {
      return <h1>What</h1>;
    }
  }
}


export default withRouter(EditGroupForm);
