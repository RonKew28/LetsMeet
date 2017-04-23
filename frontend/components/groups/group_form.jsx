import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.navigateToGroupShow = this.navigateToGroupShow.bind(this);
    this.state = {
      name: "",
      location: "",
      description: "",
      category: ""
    };

  }

  navigateToSearch() {
    this.props.router.push("/");
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
    const newGroup = this.state;
    this.props.createGroup(newGroup);
    this.navigateToGroupShow();
  }

  goToStepTwo(e) {
    e.preventDefault();
    document.getElementById('step-two').style = "display: flex";
  }

  goToStepThree(e) {
    e.preventDefault();
    document.getElementById('step-three').style = "display: flex";
  }

  goToStepFour(e) {
    e.preventDefault();
    document.getElementById('step-four').style = "display: flex";
  }

  render() {
    return (

      <div className="new-group-container">
        <div className="new-group-form">
          <section className="group-headers">
            <h3>Start a new LetsMeet group</h3>
            <h4>We'll help you find people who are interested.</h4>
          </section>
          <form onSubmit={this.handleSubmit}>

            <div className="step">
              <label className="group-form-question">
              What's your new LetsMeet Group's hometown?
              </label>

              <input type="text" placeholder="Please enter a city"
                    value={this.state.location}
                onChange={this.update("location")}/>
              <br/>
              <button className="red-button"
                onClick={this.goToStepTwo}>Continue</button>
            </div>

            <div className="step" id="step-two"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                What will your LetsMeet group be about?
              </label>
              <input type="text" placeholder="Please select a category"
                value={this.state.category}
                onChange={this.update("category")}/>
              <br/>
              <button className="red-button"
                onClick={this.goToStepThree}>Continue</button>
            </div>

            <div className="step" id="step-three"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                What will your LetsMeet group's name be?
              </label>
              <input type="text" placeholder="Please enter a name"
                value={this.state.name} onChange={this.update("name")}/>
              <br/>
              <button className="red-button"
                onClick={this.goToStepFour}>Continue</button>
            </div>

            <div className="step" id="step-four"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                Tell us a little about your group.
                Who should join?
                What will your Meetup do?
              </label >
              <input type="text" placeholder="Please enter description"
                value={this.state.description}
                onChange={this.update("description")}/>
            </div>

              <div className="red-button">
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
