import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      location: "",
      description: "",
      category: ""
    };

  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  navigateToGroupShow() {
    this.props.router.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const bench = this.state;
    this.props.createGroup(Group);
    this.props.navigateToGroupShow();
  }

  test(e) {
    e.preventDefault();
    document.getElementById('divid').style = "display: block";
  }

  render() {
    return (

      <div className="new-group-container">
        <div className="new-group-form">
          <h3>Start a new LetsMeet group</h3>
          <h4>We'll help you find people who are interested.</h4>

          <form onSubmit={this.handleSubmit}>
            <label className="group-form-question">
              What's your new LetsMeet Group's hometown?
            </label>
            <input type="text" placeholder="Please enter a city"
              onChange={this.update("location")}/>
            <button onClick={this.test}>Click</button>
            <label className="group-form-question">
              What will your LetsMeet group be about?
            </label>
            <input id="divid" type="text" placeholder="Please select a category"
              onChange={this.update("category")}
              style={{display: 'none'}}/>

              <label className="group-form-question">
                What will your LetsMeet group's name be?
              </label>
              <input type="text" placeholder="Please enter a name"
                onChange={this.update("name")}/>

              <label className="group-form-question">
                Tell us a little about your group. Who should join?
                What will your Meetup do?
              </label>
              <input type="text" placeholder="Please enter a name"
                onChange={this.update("name")}/>

              <div className="button-holder" style={{display: 'none'}}>
                <input type="submit" value="Create LetsMeet Group" />
              </div>
            </form>

            <div>
              <button
                onClick={this.navigateToSearch}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

export default withRouter(GroupForm);
