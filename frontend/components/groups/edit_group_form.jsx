import React from 'react';
import { Link, withRouter } from 'react-router';

class EditGroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.group.id,
      name: this.props.group.name,
      category: this.props.group.category,
      location: this.props.group.location,
      description: this.props.group.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        id: newProps.group.id,
        name: newProps.group.name,
        description: newProps.group.description,
        location: newProps.group.location,
        category: newProps.group.category
      });
    }
  }

  handleDelete(e) {
    debugger
    e.preventDefault();
    this.props.deleteGroup(this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGroup = this.state;
    this.props.updateGroup(newGroup)
      .then((result) => {
        this.props.router.push(`groups/${result.group.id}`);
      });
  }

  render() {
    if(this.props.group.name) {
      return (

        <div className="new-group-container">
          <div className="group-form-header">
            <h3>Update your LetsMeet group details</h3>
          </div>
          <div className="new-group-form">
            <form onSubmit={this.handleSubmit}>

              <div className="step">
                <label className="group-form-question">
                What's your new LetsMeet Group's hometown?
                </label>
                <input type="text" placeholder="Please enter a city"
                       value={this.state.location}
                       onChange={this.update("location")}/>
              </div>

              <div className="step">
                <label className="group-form-question">
                  What will your LetsMeet group be about?
                </label>
                <input type="text" placeholder="Please select a category"
                  value={this.state.category}
                  onChange={this.update("category")}/>
                <br/>
              </div>

              <div className="step">
                <label className="group-form-question">
                  What will your LetsMeet group's name be?
                </label>
                <input type="text" placeholder="Please enter a name"
                  value={this.state.name} onChange={this.update("name")}/>
                <br/>
              </div>

              <div className="step">
                <label className="group-form-question">
                  Describe what your LetsMeetGroup will do.
                </label >
                <input type="text" placeholder="Please enter description"
                  value={this.state.description}
                  onChange={this.update("description")}/>
              </div>

                <div>
                  <input className="red-button"
                         id='new-group-submit'
                         type="submit"
                         value="Update LetsMeet Group" />
                </div>
                <button
                  onClick={this.handleDelete}
                  className='red-button'>
                  DELETE GROUP
                </button>
                <br />
                <button
                  onClick={this.navigateToGroupShow}
                  className='cancel-button'>
                  Cancel
                </button>
              </form>

              <div>
              </div>
            </div>
          </div>
        );
      }
      else {
        return <h1>What</h1>;
      }
    }
  }



export default withRouter(EditGroupForm);
