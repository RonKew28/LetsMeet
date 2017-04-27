import React from 'react';
import { Link, withRouter } from 'react-router';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.navigateToEventShow = this.navigateToEventShow.bind(this);
    this.state = {
      name: "",
      location_name: "",
      location_address: "",
      date: "",
      time: "",
      description: ""
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
  navigateToEventShow() {
    this.props.router.push(`events/${this.state.event.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = this.state;
    newEvent.group_id = this.props.group_id;
    this.props.createEvent(newEvent)
      .then((result) => {
        this.props.router.push(`events/${result.event.id}`);
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

      <div className="new-group-container">
        <div className="group-form-header">
            <h3>Create an event!</h3>
            <h4>Just give us a few details below.</h4>
        </div>
        <div className="new-group-form">
          <form onSubmit={this.handleSubmit}>

            <div className="step" id="step-one">
              <label className="group-form-question">
              What's the address of your event?
              </label>
              <input type="text" placeholder="Please enter a location name"
                     value={this.state.location_name}
                     onChange={this.update("location_name")}/>
              <input type="text" placeholder="Please enter a location address"
                     value={this.state.location_address}
                     onChange={this.update("location_address")}/>
              <button id="button-one" className="step-button"
                onClick={this.goToStepTwo}>Next</button>
            </div>

            <div className="step animated bounceInUp" id="step-two"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                What date will the event be held?
              </label>
              <input type="date" placeholder="Please select a date"
                value={this.state.date}
                onChange={this.update("date")}/>
              <input type="time" placeholder="Please select a time"
                value={this.state.time}
                onChange={this.update("time")}/>
              <br/>
              <button id="button-two" className="step-button"
                onClick={this.goToStepThree}>Continue</button>
            </div>

            <div className="step" id="step-three"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                Give a name for your event!
              </label>
              <input type="text" placeholder="Please enter a name"
                value={this.state.name} onChange={this.update("name")}/>
              <br/>
              <button className="step-button" id="button-three"
                onClick={this.goToStepFour}>Continue</button>
            </div>

            <div className="step" id="step-four"
                 style={{display: 'none'}}>
              <label className="group-form-question">
                Please give some details about your event.
              </label >
              <input type="text" placeholder="Please enter event details"
                value={this.state.description}
                onChange={this.update("description")}/>
            </div>

              <div>
                <input className="red-button" style={{display: 'none'}}
                       id='new-group-submit'
                       type="submit"
                       value="Create Event" />
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

export default withRouter(EventForm);
