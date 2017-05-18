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
      category: "",
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
    this.props.router.push(`groups/${this.state.group.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGroup = this.state;
    this.props.createGroup(newGroup)
      .then((result) => {
        this.props.router.push(`groups/${result.group.id}`);
      });
  }

  goToStepTwo(e) {
    e.preventDefault();
    document.getElementById('button-one').style = "display: none";
    document.getElementById('step-two').style = "display: flex";
  }

  goToStepThree(e) {
    e.preventDefault();
    document.getElementById('button-two').style = "display: none";
    document.getElementById('step-three').style = "display: flex";
  }

  goToStepFour(e) {
    e.preventDefault();
    document.getElementById('button-three').style = "display: none";
    document.getElementById('new-group-submit').style="display: block";
    document.getElementById('step-four').style = "display: flex";
  }

  render() {
    return (

      <div className="new-group-container animated bounceInUp">
        <div className="group-form-header">
            <h3>Start a new LetsMeet group</h3>
            <h4>We'll help you find people who are interested.</h4>
        </div>
        <div className="new-group-form">
          <form onSubmit={this.handleSubmit}>

            <div className="step" id="step-one">
              <label className="group-form-question">
              What's your new LetsMeet Group's hometown?
              </label>
              <input type="text" placeholder="Please enter a city"
                     value={this.state.location}
                     onChange={this.update("location")}/>
              <button id="button-one" className="step-button"
                onClick={this.goToStepTwo}>Next</button>
            </div>

            <div className="step animated bounceInUp" id="step-two"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                What will your LetsMeet group be about?
              </label>
              <input type="text" placeholder="Please select a category"
                value={this.state.category}
                onChange={this.update("category")}/>
              <br/>
              <button id="button-two" className="step-button"
                onClick={this.goToStepThree}>Continue</button>
            </div>

            <div className="step animated bounceInUp" id="step-three"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                What will your LetsMeet group's name be?
              </label>
              <input type="text" placeholder="Please enter a name"
                value={this.state.name} onChange={this.update("name")}/>
              <br/>
              <button className="step-button" id="button-three"
                onClick={this.goToStepFour}>Continue</button>
            </div>

            <div className="step animated bounceInUp" id="step-four"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                Describe what your LetsMeetGroup will do.
              </label >
              <input type="text" placeholder="Please enter description"
                value={this.state.description}
                onChange={this.update("description")}/>
            </div>

              <div>
                <input className="red-button animated bounceInUp"
                       style={{display: 'none'}}
                       id='new-group-submit'
                       type="submit"
                       value="Create LetsMeet Group" />
              </div>
              <button
                onClick={this.navigateToSearch}
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
  }

export default withRouter(GroupForm);
